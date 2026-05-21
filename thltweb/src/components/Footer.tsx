const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <h2>QuynhStore</h2>
          <p>Hệ thống bán lẻ công nghệ chính hãng, giá tốt và hỗ trợ sau bán hàng tận tâm.</p>
        </div>
        <div>
          <h3>Tổng đài hỗ trợ</h3>
          <p>Mua hàng - bảo hành: 1800.1109</p>
          <p>Khiếu nại: 1800.1110</p>
        </div>
        <div>
          <h3>Chính sách</h3>
          <p>Giao hàng nhanh</p>
          <p>Đổi trả trong 30 ngày</p>
          <p>Trả góp 0%</p>
        </div>
        <form className="footer-signup">
          <h3>Nhận tin khuyến mãi</h3>
          <label className="sr-only" htmlFor="footer-email">Email</label>
          <input id="footer-email" type="email" placeholder="Email của bạn" />
          <button type="submit">Đăng ký</button>
        </form>
      </div>
      <p className="copyright">© 2026 QuynhStore. Thiết kế tham khảo trải nghiệm ecommerce hiện đại.</p>
    </footer>
  )
}

export default Footer
