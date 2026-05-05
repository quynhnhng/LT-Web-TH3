import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="menu">
      <NavLink to="/" end>Trang Chủ</NavLink>
      <NavLink to="/dien-thoai">Điện thoại</NavLink>
      <NavLink to="/laptop">Laptop</NavLink>
      <NavLink to="/phu-kien">Phụ kiện</NavLink>
      <NavLink to="/tablet">Tablet</NavLink>
      <NavLink to="/gioi-thieu">Giới thiệu</NavLink>
    </nav>
  )
}

export default Navbar