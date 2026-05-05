const LaptopPage = () => {
  return (
    <section className="products">
      <h2>💻 Laptop</h2>
      <div className="product-list">

        <div className="product">
          <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRvhgR8EbHNnG_z7Lgms9RSGXpxVFGqHMGoE6kMp5vmppOnyC4DA5CRTLdSRG2xvblOHTwKKHF_kVKOCAO5bGU94yZz3Z9l3_HvLZCrLae2oTIW8ouDB6IzEPbZIfSz-DBZhBjPEux1b2I&usqp=CAc" alt="Macbook Neo" />
          <h3>MacBook Neo</h3>
          <p className="price">15.990.000đ</p>
          <button>Mua</button>
        </div>

        <div className="product">
          <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_3__9_29.png" alt="Dell Inspiron 14" />
          <h3>Dell Inspiron 14</h3>
          <p className="price">27.490.000đ</p>
          <button>Mua</button>
        </div>

        <div className="product">
          <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_14_19_1.png" alt="Asus Viviobook S14" />
          <h3>ASUS Viviobook S14</h3>
          <p className="price">27.890.000đ</p>
          <button>Mua</button>
        </div>

      </div>
    </section>
  )
}

export default LaptopPage