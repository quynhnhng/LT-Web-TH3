using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using QuynhStore.Api.Data;

#nullable disable

namespace QuynhStore.Api.Migrations;

[DbContext(typeof(AppDbContext))]
partial class AppDbContextModelSnapshot : ModelSnapshot
{
    protected override void BuildModel(ModelBuilder modelBuilder)
    {
        modelBuilder.HasAnnotation("ProductVersion", "8.0.11");

        modelBuilder.Entity("QuynhStore.Api.Models.Product", b =>
        {
            b.Property<int>("Id")
                .ValueGeneratedOnAdd()
                .HasColumnType("INTEGER");

            b.Property<string>("Badge")
                .HasMaxLength(40)
                .HasColumnType("TEXT");

            b.Property<string>("Brand")
                .IsRequired()
                .HasMaxLength(80)
                .HasColumnType("TEXT");

            b.Property<string>("Category")
                .IsRequired()
                .HasMaxLength(40)
                .HasColumnType("TEXT");

            b.Property<string>("Discount")
                .HasMaxLength(20)
                .HasColumnType("TEXT");

            b.Property<string>("Gift")
                .HasMaxLength(220)
                .HasColumnType("TEXT");

            b.Property<string>("Image")
                .IsRequired()
                .HasColumnType("TEXT");

            b.Property<string>("Name")
                .IsRequired()
                .HasMaxLength(160)
                .HasColumnType("TEXT");

            b.Property<decimal?>("OldPrice")
                .HasColumnType("TEXT");

            b.Property<decimal>("Price")
                .HasColumnType("TEXT");

            b.Property<double>("Rating")
                .HasColumnType("REAL");

            b.Property<string>("Sold")
                .IsRequired()
                .HasMaxLength(40)
                .HasColumnType("TEXT");

            b.HasKey("Id");
            b.ToTable("Products");

            b.HasData(
                new
                {
                    Id = 1,
                    Badge = "Trả góp 0%",
                    Brand = "Apple",
                    Category = "phone",
                    Discount = "-9%",
                    Gift = "Tặng gói bảo hành rơi vỡ 6 tháng",
                    Image = "https://cdn1.viettelstore.vn/Images/Product/ProductImage/444965480.jpeg",
                    Name = "iPhone 17 Pro Max 256GB",
                    OldPrice = 39990000m,
                    Price = 36490000m,
                    Rating = 4.9,
                    Sold = "1.2k"
                },
                new
                {
                    Id = 2,
                    Badge = "AI phone",
                    Brand = "Samsung",
                    Category = "phone",
                    Discount = "-12%",
                    Gift = "Giảm thêm khi thu cũ đổi mới",
                    Image = "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s26-ultra-1.jpg",
                    Name = "Samsung Galaxy S26 Ultra 12GB 256GB",
                    OldPrice = 33990000m,
                    Price = 29990000m,
                    Rating = 4.8,
                    Sold = "890"
                },
                new
                {
                    Id = 3,
                    Badge = "Mỏng nhẹ",
                    Brand = "Apple",
                    Category = "laptop",
                    Discount = "-16%",
                    Gift = "Tặng balo laptop cao cấp",
                    Image = "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRvhgR8EbHNnG_z7Lgms9RSGXpxVFGqHMGoE6kMp5vmppOnyC4DA5CRTLdSRG2xvblOHTwKKHF_kVKOCAO5bGU94yZz3Z9l3_HvLZCrLae2oTIW8ouDB6IzEPbZIfSz-DBZhBjPEux1b2I&usqp=CAc",
                    Name = "MacBook Neo M4 13 inch",
                    OldPrice = 18990000m,
                    Price = 15990000m,
                    Rating = 4.8,
                    Sold = "430"
                });
        });
    }
}
