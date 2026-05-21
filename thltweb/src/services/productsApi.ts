import axios from 'axios'

export type ApiProduct = {
  id: number
  name: string
  category: string
  brand: string
  price: number
  oldPrice?: number | null
  discount?: string | null
  gift?: string | null
  image: string
  rating: number
  sold: string
  badge?: string | null
}

export type ProductRequest = Omit<ApiProduct, 'id'>

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:5000/api',
  timeout: 8000,
})

export const productsApi = {
  getAll: async (category?: string) => {
    const response = await api.get<ApiProduct[]>('/products', {
      params: category ? { category } : undefined,
    })

    return response.data
  },

  getById: async (id: number) => {
    const response = await api.get<ApiProduct>(`/products/${id}`)

    return response.data
  },

  create: async (product: ProductRequest) => {
    const response = await api.post<ApiProduct>('/products', product)

    return response.data
  },

  update: async (id: number, product: ApiProduct) => {
    await api.put(`/products/${id}`, product)
  },

  remove: async (id: number) => {
    await api.delete(`/products/${id}`)
  },
}
