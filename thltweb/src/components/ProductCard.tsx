import type { Product } from '../data/products'

type ProductCardProps = {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className="product-card">
      <div className="product-media">
        {product.discount && <span className="discount-badge">{product.discount}</span>}
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="product-info">
        <p className="product-brand">{product.brand}</p>
        <h3>{product.name}</h3>
        <div className="price-row">
          <strong>{product.price}</strong>
          {product.oldPrice && <span>{product.oldPrice}</span>}
        </div>
        {product.gift && <p className="product-gift">{product.gift}</p>}
        <div className="product-meta">
          <span aria-label={`Đánh giá ${product.rating} trên 5 sao`}>★ {product.rating}</span>
          <span>Đã bán {product.sold}</span>
        </div>
        <button type="button">Thêm vào giỏ</button>
      </div>
    </article>
  )
}

export default ProductCard
