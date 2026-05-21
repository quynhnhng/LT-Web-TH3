import { Link } from 'react-router-dom'
import ApiProductsPanel from '../components/ApiProductsPanel'
import ProductCard from '../components/ProductCard'
import { getProductsByCategory, products } from '../data/products'

const categories = [
  { label: 'Điện thoại, Tablet', icon: '▣', to: '/dien-thoai' },
  { label: 'Laptop', icon: '⌘', to: '/laptop' },
  { label: 'Âm thanh, phụ kiện', icon: '◉', to: '/phu-kien' },
  { label: 'Thu cũ đổi mới', icon: '↻', to: '/gioi-thieu' },
  { label: 'Khuyến mãi hôm nay', icon: '%', to: '/' },
  { label: 'Tin công nghệ', icon: 'i', to: '/gioi-thieu' },
]

const promoLinks = [
  'Deal sốc đến 50%',
  'Ưu đãi học sinh sinh viên',
  'Thu cũ lên đời giá hời',
  'Khách hàng doanh nghiệp',
  'Voucher thành viên',
]

const quickServices = [
  'Sản phẩm chính hãng - xuất VAT đầy đủ',
  'Giao nhanh miễn phí cho đơn từ 300k',
  'Trả góp 0% qua thẻ tín dụng',
  'Bảo hành tận tâm tại cửa hàng',
]

const HomePage = () => {
  const laptops = getProductsByCategory('laptop')
  const accessories = getProductsByCategory('accessory')

  return (
    <>
      <section className="home-hero" aria-labelledby="home-title">
        <aside className="category-panel" aria-label="Danh mục nổi bật">
          {categories.map((category) => (
            <Link key={category.label} to={category.to}>
              <span>{category.icon}</span>
              {category.label}
            </Link>
          ))}
        </aside>

        <div className="hero-banner">
          <p className="eyebrow">Tuần lễ công nghệ QuynhStore</p>
          <h1 id="home-title">Sắm điện thoại, laptop, phụ kiện chính hãng với giá tốt</h1>
          <p>
            Gom deal hot, ưu đãi trả góp và quà tặng mua kèm trong một trải nghiệm mua sắm gọn,
            nhanh, dễ chọn.
          </p>
          <div className="hero-actions">
            <Link className="primary-action" to="/dien-thoai">Xem điện thoại</Link>
            <Link className="secondary-action" to="/laptop">Săn laptop</Link>
          </div>
        </div>

        <div className="side-deals" aria-label="Ưu đãi nhanh">
          <article>
            <span>Hot</span>
            <h2>iPhone 17 Pro Max</h2>
            <p>Giảm đến 3.5 triệu khi thu cũ đổi mới.</p>
          </article>
          <article>
            <span>New</span>
            <h2>Galaxy AI</h2>
            <p>Đặt trước nhận gói bảo hành mở rộng.</p>
          </article>
        </div>
      </section>

      <section className="promo-strip" aria-label="Chương trình ưu đãi">
        {promoLinks.map((item) => (
          <a href="#featured-products" key={item}>{item}</a>
        ))}
      </section>

      <section className="service-grid" aria-label="Cam kết mua hàng">
        {quickServices.map((item) => (
          <div key={item} className="service-item">
            <span>✓</span>
            <p>{item}</p>
          </div>
        ))}
      </section>

      <section id="featured-products" className="products">
        <div className="section-head">
          <div>
            <p className="section-kicker">Mua nhiều tuần này</p>
            <h2>Sản phẩm nổi bật</h2>
          </div>
          <Link to="/dien-thoai">Xem tất cả</Link>
        </div>
        <div className="product-list">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="split-products">
        <div className="mini-section">
          <div className="section-head">
            <div>
              <p className="section-kicker">Hiệu năng</p>
              <h2>Laptop đáng mua</h2>
            </div>
            <Link to="/laptop">Xem thêm</Link>
          </div>
          <div className="compact-list">
            {laptops.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className="mini-section">
          <div className="section-head">
            <div>
              <p className="section-kicker">Mua kèm</p>
              <h2>Phụ kiện chất lượng</h2>
            </div>
            <Link to="/phu-kien">Xem thêm</Link>
          </div>
          <div className="compact-list">
            {accessories.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="member-panel">
        <div>
          <p className="section-kicker">QuynhMember</p>
          <h2>Đăng ký thành viên để nhận voucher và theo dõi bảo hành</h2>
          <p>Tích điểm mỗi đơn hàng, nhận thông báo deal sớm và ưu đãi sinh nhật.</p>
        </div>
        <form className="member-form">
          <label className="sr-only" htmlFor="member-phone">Số điện thoại</label>
          <input id="member-phone" type="tel" placeholder="Nhập số điện thoại" />
          <button type="submit">Nhận ưu đãi</button>
        </form>
      </section>

      <ApiProductsPanel />
    </>
  )
}

export default HomePage
