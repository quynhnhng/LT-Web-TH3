import { useEffect, useState } from 'react'
import { type ApiProduct, productsApi } from '../services/productsApi'

const demoImage = 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/a/i/airpods-4-2.png'

const newDemoProduct = (): Omit<ApiProduct, 'id'> => ({
  name: `Sản phẩm API demo ${new Date().toLocaleTimeString('vi-VN')}`,
  category: 'accessory',
  brand: 'QuynhStore',
  price: 1990000,
  oldPrice: 2490000,
  discount: '-20%',
  gift: 'Sản phẩm được thêm từ React bằng Axios POST',
  image: demoImage,
  rating: 4.5,
  sold: '0',
  badge: 'API demo',
})

const ApiProductsPanel = () => {
  const [products, setProducts] = useState<ApiProduct[]>([])
  const [status, setStatus] = useState('Chưa gọi API')
  const [loading, setLoading] = useState(false)

  const loadProducts = async () => {
    setLoading(true)
    try {
      const data = await productsApi.getAll()
      setProducts(data)
      setStatus(`GET thành công: ${data.length} sản phẩm`)
    } catch {
      setStatus('Chưa kết nối được backend. Hãy chạy ASP.NET Core API ở cổng 5000.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    let isMounted = true

    productsApi
      .getAll()
      .then((data) => {
        if (!isMounted) {
          return
        }

        setProducts(data)
        setStatus(`GET thành công: ${data.length} sản phẩm`)
      })
      .catch(() => {
        if (!isMounted) {
          return
        }

        setStatus('Chưa kết nối được backend. Hãy chạy ASP.NET Core API ở cổng 5000.')
      })

    return () => {
      isMounted = false
    }
  }, [])

  const handleCreate = async () => {
    setLoading(true)
    try {
      await productsApi.create(newDemoProduct())
      await loadProducts()
      setStatus('POST thành công: đã thêm sản phẩm demo')
    } catch {
      setStatus('POST thất bại. Kiểm tra backend/API URL.')
      setLoading(false)
    }
  }

  const handleUpdate = async () => {
    const firstProduct = products[0]

    if (!firstProduct) {
      setStatus('Không có sản phẩm để PUT.')
      return
    }

    setLoading(true)
    try {
      await productsApi.update(firstProduct.id, {
        ...firstProduct,
        badge: 'Đã PUT',
        gift: 'Sản phẩm vừa được cập nhật bằng Axios PUT',
        price: Math.max(0, firstProduct.price - 100000),
      })
      await loadProducts()
      setStatus(`PUT thành công: đã cập nhật #${firstProduct.id}`)
    } catch {
      setStatus('PUT thất bại. Kiểm tra backend/API URL.')
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    const lastProduct = products.at(-1)

    if (!lastProduct) {
      setStatus('Không có sản phẩm để DELETE.')
      return
    }

    setLoading(true)
    try {
      await productsApi.remove(lastProduct.id)
      await loadProducts()
      setStatus(`DELETE thành công: đã xoá #${lastProduct.id}`)
    } catch {
      setStatus('DELETE thất bại. Kiểm tra backend/API URL.')
      setLoading(false)
    }
  }

  return (
    <section className="api-panel" aria-labelledby="api-panel-title">
      <div>
        <p className="section-kicker">Kết nối Backend</p>
        <h2 id="api-panel-title">Demo Axios CRUD với ASP.NET Core API</h2>
        <p>{status}</p>
      </div>

      <div className="api-actions">
        <button type="button" onClick={loadProducts} disabled={loading}>GET</button>
        <button type="button" onClick={handleCreate} disabled={loading}>POST</button>
        <button type="button" onClick={handleUpdate} disabled={loading}>PUT</button>
        <button type="button" onClick={handleDelete} disabled={loading}>DELETE</button>
      </div>

      <div className="api-list">
        {products.slice(0, 4).map((product) => (
          <article key={product.id}>
            <strong>#{product.id} {product.name}</strong>
            <span>{product.brand} - {product.price.toLocaleString('vi-VN')}đ</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ApiProductsPanel
