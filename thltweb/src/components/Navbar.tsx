import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="menu" aria-label="Danh mục sản phẩm">
      <NavLink to="/" end>Trang Chủ</NavLink>
      <NavLink to="/dien-thoai">Điện thoại</NavLink>
      <NavLink to="/tablet">Tablet</NavLink>
      <NavLink to="/laptop">Laptop</NavLink>
      <NavLink to="/phu-kien">Phụ kiện</NavLink>
      <a href="#featured-products">Khuyến mãi</a>
      <NavLink to="/gioi-thieu">Giới thiệu</NavLink>
    </nav>
  )
}

export default Navbar
