# QuynhStore.Api

Backend ASP.NET Core Web API đơn giản cho project THLTWEB.

## Cài đặt cần có

- .NET SDK 8
- dotnet-ef nếu muốn tạo migration bằng lệnh

```powershell
dotnet tool install --global dotnet-ef
```

## Chạy backend

```powershell
cd backend/QuynhStore.Api
dotnet restore
dotnet ef database update
dotnet run
```

API chạy tại:

```text
http://localhost:5000
```

Swagger:

```text
http://localhost:5000/swagger
```

## Cấu hình database

Connection string nằm trong `appsettings.json`:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Data Source=quynhstore.db"
  }
}
```

Project đang dùng SQLite để nhẹ, không cần cài SQL Server.

## EF Core migration

Migration ban đầu đã được tạo sẵn trong thư mục `Migrations`.

Khi chỉnh model và muốn tạo migration mới:

```powershell
dotnet ef migrations add TenMigrationMoi
dotnet ef database update
```

## Endpoint CRUD

```text
GET    /api/products
GET    /api/products?category=phone
GET    /api/products/1
POST   /api/products
PUT    /api/products/1
DELETE /api/products/1
```

Ví dụ body cho POST:

```json
{
  "name": "Tai nghe demo",
  "category": "accessory",
  "brand": "QuynhStore",
  "price": 1990000,
  "oldPrice": 2490000,
  "discount": "-20%",
  "gift": "Tạo từ API",
  "image": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/a/i/airpods-4-2.png",
  "rating": 4.5,
  "sold": "0",
  "badge": "API"
}
```
