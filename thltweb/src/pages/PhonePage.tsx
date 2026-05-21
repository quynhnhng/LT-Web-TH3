import ProductCard from '../components/ProductCard'
import { getProductsByCategory } from '../data/products'

const PhonePage = () => {
  const phones = getProductsByCategory('phone')

  return (
    <section className="products category-page">
      <div className="section-head">
        <div>
          <p className="section-kicker">Apple, Samsung, Xiaomi</p>
          <h2>Điện thoại nổi bật</h2>
        </div>
        <div className="filter-chips" aria-label="Bộ lọc nhanh">
          <button type="button">5G</button>
          <button type="button">Camera đẹp</button>
          <button type="button">Trả góp 0%</button>
        </div>
      </div>
      <div className="product-list">
        {phones.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default PhonePage
