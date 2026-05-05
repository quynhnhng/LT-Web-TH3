const AccessoryPage = () => {
  return (
    <section className="products">
      <h2>🎧 Phụ kiện</h2>
      <div className="product-list">

        <div className="product">
          <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/a/i/airpods-4-2.png" alt="Airpods 4"/>
          <h3>AirPods 4</h3>
          <p className="price">2.990.000</p>
          <button>Mua</button>
        </div>

        <div className="product">
          <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/o/sony-wh-1000xm6-5.jpg" alt="Sony  WH-1000XM6" />
          <h3>Sony WH-1000XM6</h3>
          <p className="price">9.990.000đ</p>
          <button>Mua</button>
        </div>

        <div className="product">
          <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/c/h/chuot-gaming-khong-day-logitech-pro-x-superlight-2c_1_.png" alt="Logitech Pro X Superlight 2C" />
          <h3>Logitech Pro X Superlight 2C</h3>
          <p className="price">3.190.000đ</p>
          <button>Mua</button>
        </div>

      </div>
    </section>
  )
}

export default AccessoryPage