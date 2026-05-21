using System.ComponentModel.DataAnnotations;

namespace QuynhStore.Api.Models;

public class Product
{
    public int Id { get; set; }

    [Required]
    [MaxLength(160)]
    public string Name { get; set; } = string.Empty;

    [Required]
    [MaxLength(40)]
    public string Category { get; set; } = string.Empty;

    [Required]
    [MaxLength(80)]
    public string Brand { get; set; } = string.Empty;

    [Range(0, double.MaxValue)]
    public decimal Price { get; set; }

    [Range(0, double.MaxValue)]
    public decimal? OldPrice { get; set; }

    [MaxLength(20)]
    public string? Discount { get; set; }

    [MaxLength(220)]
    public string? Gift { get; set; }

    [Required]
    public string Image { get; set; } = string.Empty;

    [Range(0, 5)]
    public double Rating { get; set; }

    [MaxLength(40)]
    public string Sold { get; set; } = "0";

    [MaxLength(40)]
    public string? Badge { get; set; }
}
