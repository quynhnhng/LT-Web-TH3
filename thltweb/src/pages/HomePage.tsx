const HomePage = () => {
  return (
    <>
      <section className="banner">
        <div className="banner-content">
          <h1>Khuyến mãi lớn 🔥</h1>
        </div>
      </section>

      <section className="products">
        <h2>Sản phẩm nổi bật</h2>
        <div className="product-list">

          <div className="product">
            <img src="https://cdn1.viettelstore.vn/Images/Product/ProductImage/444965480.jpeg" alt="iPhone 17 Pro Max" />
            <h3>iPhone 17 Pro Max</h3>
            <p className="price">36.490.000đ</p>
            <button>Mua</button>
          </div>

          <div className="product">
            <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s26-ultra-1.jpg" alt="Samsung S26 Ultra" />
            <h3>Samsung Galaxy S26 Ultra</h3>
            <p className="price">29.990.000đ</p>
            <button>Mua</button>
          </div>

          <div className="product">
            <img src="https://sonpixel.vn/wp-content/uploads/2025/12/xiaomi-17-ultra.webp" alt="Xiaomi 17 Ultra" />
            <h3>Xiaomi 17 Ultra</h3>
            <p className="price">34.590.000đ</p>
            <button>Mua</button>
          </div>

        </div>
      </section>
    </>
  )
}

export default HomePage