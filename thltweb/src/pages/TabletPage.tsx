import ProductCard from '../components/ProductCard'
import { getProductsByCategory } from '../data/products'

const TabletPage = () => {
  const tablets = getProductsByCategory('tablet')

  return (
    <section className="products category-page">
      <div className="section-head">
        <div>
          <p className="section-kicker">Làm việc, học tập, giải trí</p>
          <h2>Máy tính bảng</h2>
        </div>
        <div className="filter-chips" aria-label="Bộ lọc nhanh">
          <button type="button">iPad</button>
          <button type="button">Có bút</button>
          <button type="button">Giá tốt</button>
        </div>
      </div>
      <div className="product-list">
        {tablets.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default TabletPage
