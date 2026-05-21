import ProductCard from '../components/ProductCard'
import { getProductsByCategory } from '../data/products'

const LaptopPage = () => {
  const laptops = getProductsByCategory('laptop')

  return (
    <section className="products category-page">
      <div className="section-head">
        <div>
          <p className="section-kicker">Học tập, văn phòng, gaming</p>
          <h2>Laptop bán chạy</h2>
        </div>
        <div className="filter-chips" aria-label="Bộ lọc nhanh">
          <button type="button">MacBook</button>
          <button type="button">OLED</button>
          <button type="button">Dưới 30 triệu</button>
        </div>
      </div>
      <div className="product-list">
        {laptops.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default LaptopPage
