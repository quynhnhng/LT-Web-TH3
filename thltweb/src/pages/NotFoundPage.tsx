import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h2>404</h2>
      <p>Trang bạn tìm không tồn tại 😢</p>
      <Link to="/">Về trang chủ</Link>
    </div>
  )
}

export default NotFoundPage
