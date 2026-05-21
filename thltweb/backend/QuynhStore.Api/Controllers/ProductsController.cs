using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QuynhStore.Api.Data;
using QuynhStore.Api.Models;

namespace QuynhStore.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductsController(AppDbContext db) : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Product>>> GetProducts([FromQuery] string? category)
    {
        var query = db.Products.AsNoTracking();

        if (!string.IsNullOrWhiteSpace(category))
        {
            query = query.Where(product => product.Category == category);
        }

        return await query.OrderBy(product => product.Id).ToListAsync();
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<Product>> GetProduct(int id)
    {
        var product = await db.Products.FindAsync(id);

        return product is null ? NotFound() : product;
    }

    [HttpPost]
    public async Task<ActionResult<Product>> CreateProduct(Product product)
    {
        db.Products.Add(product);
        await db.SaveChangesAsync();

        return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, product);
    }

    [HttpPut("{id:int}")]
    public async Task<IActionResult> UpdateProduct(int id, Product product)
    {
        if (id != product.Id)
        {
            return BadRequest("Id trên URL không khớp với Id trong body.");
        }

        if (!await db.Products.AnyAsync(item => item.Id == id))
        {
            return NotFound();
        }

        db.Entry(product).State = EntityState.Modified;
        await db.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> DeleteProduct(int id)
    {
        var product = await db.Products.FindAsync(id);

        if (product is null)
        {
            return NotFound();
        }

        db.Products.Remove(product);
        await db.SaveChangesAsync();

        return NoContent();
    }
}
