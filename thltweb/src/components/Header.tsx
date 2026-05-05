import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">QuynhStore</Link>
      <input type="text" placeholder="Tìm kiếm sản phẩm..." />
      <div className="cart">🛒</div>
    </header>
  )
}

export default Header