using Microsoft.EntityFrameworkCore;
using QuynhStore.Api.Models;

namespace QuynhStore.Api.Data;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    public DbSet<Product> Products => Set<Product>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Product>().HasData(
            new Product
            {
                Id = 1,
                Name = "iPhone 17 Pro Max 256GB",
                Category = "phone",
                Brand = "Apple",
                Price = 36490000,
                OldPrice = 39990000,
                Discount = "-9%",
                Gift = "Tặng gói bảo hành rơi vỡ 6 tháng",
                Image = "https://cdn1.viettelstore.vn/Images/Product/ProductImage/444965480.jpeg",
                Rating = 4.9,
                Sold = "1.2k",
                Badge = "Trả góp 0%"
            },
            new Product
            {
                Id = 2,
                Name = "Samsung Galaxy S26 Ultra 12GB 256GB",
                Category = "phone",
                Brand = "Samsung",
                Price = 29990000,
                OldPrice = 33990000,
                Discount = "-12%",
                Gift = "Giảm thêm khi thu cũ đổi mới",
                Image = "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s26-ultra-1.jpg",
                Rating = 4.8,
                Sold = "890",
                Badge = "AI phone"
            },
            new Product
            {
                Id = 3,
                Name = "MacBook Neo M4 13 inch",
                Category = "laptop",
                Brand = "Apple",
                Price = 15990000,
                OldPrice = 18990000,
                Discount = "-16%",
                Gift = "Tặng balo laptop cao cấp",
                Image = "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRvhgR8EbHNnG_z7Lgms9RSGXpxVFGqHMGoE6kMp5vmppOnyC4DA5CRTLdSRG2xvblOHTwKKHF_kVKOCAO5bGU94yZz3Z9l3_HvLZCrLae2oTIW8ouDB6IzEPbZIfSz-DBZhBjPEux1b2I&usqp=CAc",
                Rating = 4.8,
                Sold = "430",
                Badge = "Mỏng nhẹ"
            }
        );
    }
}
