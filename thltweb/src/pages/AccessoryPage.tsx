import ProductCard from '../components/ProductCard'
import { getProductsByCategory } from '../data/products'

const AccessoryPage = () => {
  const accessories = getProductsByCategory('accessory')

  return (
    <section className="products category-page">
      <div className="section-head">
        <div>
          <p className="section-kicker">Âm thanh, gaming, tiện ích</p>
          <h2>Phụ kiện chất lượng</h2>
        </div>
        <div className="filter-chips" aria-label="Bộ lọc nhanh">
          <button type="button">Tai nghe</button>
          <button type="button">Gaming</button>
          <button type="button">Mua kèm giảm giá</button>
        </div>
      </div>
      <div className="product-list">
        {accessories.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default AccessoryPage
