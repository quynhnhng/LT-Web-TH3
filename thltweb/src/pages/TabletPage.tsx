const TabletPage = () => {
  return (
    <section className="products">
      <h2>📟 Tablet</h2>
      <div className="product-list">

        <div className="product">
          <img src="https://cdn.tgdd.vn/Products/Images/522/325534/ipad-pro-13-inch-m4-lte-black-1-750x500.jpg" alt="iPad Pro M4" />
          <h3>iPad Pro M4 13"</h3>
          <p className="price">32.990.000đ</p>
          <button>Mua</button>
        </div>

        <div className="product">
          <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/may-tinh-bang-samsung-galaxy-tab-s10-plus-5g_2_2_1.png" alt="Galaxy Tab S10 Ultra" />
          <h3>Samsung Galaxy Tab S10 Ultra</h3>
          <p className="price">27.990.000đ</p>
          <button>Mua</button>
        </div>

        <div className="product">
          <img src="https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/522/334530/xiaomi-pad-7-xam-1-638775430772452367-750x500.jpg" alt="Xiaomi Pad 7" />
          <h3>Xiaomi Pad 7</h3>
          <p className="price">8.990.000đ</p>
          <button>Mua</button>
        </div>

      </div>
    </section>
  )
}

export default TabletPage