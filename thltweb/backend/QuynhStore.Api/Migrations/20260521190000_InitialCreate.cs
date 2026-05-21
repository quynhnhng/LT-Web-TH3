using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace QuynhStore.Api.Migrations;

public partial class InitialCreate : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.CreateTable(
            name: "Products",
            columns: table => new
            {
                Id = table.Column<int>(type: "INTEGER", nullable: false)
                    .Annotation("Sqlite:Autoincrement", true),
                Name = table.Column<string>(type: "TEXT", maxLength: 160, nullable: false),
                Category = table.Column<string>(type: "TEXT", maxLength: 40, nullable: false),
                Brand = table.Column<string>(type: "TEXT", maxLength: 80, nullable: false),
                Price = table.Column<decimal>(type: "TEXT", nullable: false),
                OldPrice = table.Column<decimal>(type: "TEXT", nullable: true),
                Discount = table.Column<string>(type: "TEXT", maxLength: 20, nullable: true),
                Gift = table.Column<string>(type: "TEXT", maxLength: 220, nullable: true),
                Image = table.Column<string>(type: "TEXT", nullable: false),
                Rating = table.Column<double>(type: "REAL", nullable: false),
                Sold = table.Column<string>(type: "TEXT", maxLength: 40, nullable: false),
                Badge = table.Column<string>(type: "TEXT", maxLength: 40, nullable: true)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_Products", x => x.Id);
            });

        migrationBuilder.InsertData(
            table: "Products",
            columns: new[] { "Id", "Badge", "Brand", "Category", "Discount", "Gift", "Image", "Name", "OldPrice", "Price", "Rating", "Sold" },
            values: new object[,]
            {
                { 1, "Trả góp 0%", "Apple", "phone", "-9%", "Tặng gói bảo hành rơi vỡ 6 tháng", "https://cdn1.viettelstore.vn/Images/Product/ProductImage/444965480.jpeg", "iPhone 17 Pro Max 256GB", 39990000m, 36490000m, 4.9000000000000004, "1.2k" },
                { 2, "AI phone", "Samsung", "phone", "-12%", "Giảm thêm khi thu cũ đổi mới", "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s26-ultra-1.jpg", "Samsung Galaxy S26 Ultra 12GB 256GB", 33990000m, 29990000m, 4.7999999999999998, "890" },
                { 3, "Mỏng nhẹ", "Apple", "laptop", "-16%", "Tặng balo laptop cao cấp", "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRvhgR8EbHNnG_z7Lgms9RSGXpxVFGqHMGoE6kMp5vmppOnyC4DA5CRTLdSRG2xvblOHTwKKHF_kVKOCAO5bGU94yZz3Z9l3_HvLZCrLae2oTIW8ouDB6IzEPbZIfSz-DBZhBjPEux1b2I&usqp=CAc", "MacBook Neo M4 13 inch", 18990000m, 15990000m, 4.7999999999999998, "430" }
            });
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropTable(name: "Products");
    }
}
