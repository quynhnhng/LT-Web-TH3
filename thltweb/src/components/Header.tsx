import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <p>Sản phẩm chính hãng - Xuất VAT đầy đủ</p>
        <p>Giao nhanh miễn phí cho đơn từ 300k</p>
        <p>Thu cũ giá tốt - Lên đời tiết kiệm</p>
      </div>
      <div className="header-main">
        <Link to="/" className="logo">QuynhStore</Link>
        <button className="location-button" type="button">Hồ Chí Minh</button>
        <div className="search-wrap">
          <label htmlFor="search" className="sr-only">Tìm kiếm sản phẩm</label>
          <input id="search" type="search" placeholder="Bạn cần tìm gì hôm nay?" />
        </div>
        <button className="header-action" type="button">Tra cứu đơn</button>
        <button className="cart" type="button" aria-label="Giỏ hàng">Giỏ hàng</button>
      </div>
    </header>
  )
}


export default Header
