export type Product = {
  id: string
  name: string
  category: 'phone' | 'laptop' | 'tablet' | 'accessory'
  brand: string
  price: string
  oldPrice?: string
  discount?: string
  gift?: string
  image: string
  rating: number
  sold: string
  badge?: string
}

export const products: Product[] = [
  {
    id: 'iphone-17-pro-max',
    name: 'iPhone 17 Pro Max 256GB',
    category: 'phone',
    brand: 'Apple',
    price: '36.490.000đ',
    oldPrice: '39.990.000đ',
    discount: '-9%',
    gift: 'Tặng gói bảo hành rơi vỡ 6 tháng',
    image: 'https://cdn1.viettelstore.vn/Images/Product/ProductImage/444965480.jpeg',
    rating: 4.9,
    sold: '1.2k',
    badge: 'Trả góp 0%',
  },
  {
    id: 'samsung-s26-ultra',
    name: 'Samsung Galaxy S26 Ultra 12GB 256GB',
    category: 'phone',
    brand: 'Samsung',
    price: '29.990.000đ',
    oldPrice: '33.990.000đ',
    discount: '-12%',
    gift: 'Giảm thêm khi thu cũ đổi mới',
    image:
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s26-ultra-1.jpg',
    rating: 4.8,
    sold: '890',
    badge: 'AI phone',
  },
  {
    id: 'xiaomi-17-ultra',
    name: 'Xiaomi 17 Ultra 5G',
    category: 'phone',
    brand: 'Xiaomi',
    price: '34.590.000đ',
    oldPrice: '37.990.000đ',
    discount: '-10%',
    gift: 'Phiếu mua hàng phụ kiện 500.000đ',
    image: 'https://sonpixel.vn/wp-content/uploads/2025/12/xiaomi-17-ultra.webp',
    rating: 4.7,
    sold: '510',
    badge: 'Camera Pro',
  },
  {
    id: 'macbook-neo',
    name: 'MacBook Neo M4 13 inch',
    category: 'laptop',
    brand: 'Apple',
    price: '15.990.000đ',
    oldPrice: '18.990.000đ',
    discount: '-16%',
    gift: 'Tặng balo laptop cao cấp',
    image:
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRvhgR8EbHNnG_z7Lgms9RSGXpxVFGqHMGoE6kMp5vmppOnyC4DA5CRTLdSRG2xvblOHTwKKHF_kVKOCAO5bGU94yZz3Z9l3_HvLZCrLae2oTIW8ouDB6IzEPbZIfSz-DBZhBjPEux1b2I&usqp=CAc',
    rating: 4.8,
    sold: '430',
    badge: 'Mỏng nhẹ',
  },
  {
    id: 'dell-inspiron-14',
    name: 'Dell Inspiron 14 Plus',
    category: 'laptop',
    brand: 'Dell',
    price: '27.490.000đ',
    oldPrice: '30.490.000đ',
    discount: '-10%',
    gift: 'Office bản quyền 1 năm',
    image:
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_3__9_29.png',
    rating: 4.6,
    sold: '260',
    badge: 'Học tập',
  },
  {
    id: 'asus-vivobook-s14',
    name: 'ASUS Vivobook S14 OLED',
    category: 'laptop',
    brand: 'ASUS',
    price: '27.890.000đ',
    oldPrice: '31.990.000đ',
    discount: '-13%',
    gift: 'Chuột không dây và túi chống sốc',
    image:
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_14_19_1.png',
    rating: 4.7,
    sold: '350',
    badge: 'OLED',
  },
  {
    id: 'ipad-pro-m4',
    name: 'iPad Pro M4 13 inch WiFi + 5G',
    category: 'tablet',
    brand: 'Apple',
    price: '32.990.000đ',
    oldPrice: '35.990.000đ',
    discount: '-8%',
    gift: 'Giảm 20% Apple Pencil khi mua kèm',
    image: 'https://cdn.tgdd.vn/Products/Images/522/325534/ipad-pro-13-inch-m4-lte-black-1-750x500.jpg',
    rating: 4.9,
    sold: '310',
    badge: 'M4',
  },
  {
    id: 'galaxy-tab-s10-ultra',
    name: 'Samsung Galaxy Tab S10 Ultra 5G',
    category: 'tablet',
    brand: 'Samsung',
    price: '27.990.000đ',
    oldPrice: '30.990.000đ',
    discount: '-10%',
    gift: 'Tặng bao da bàn phím',
    image:
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/may-tinh-bang-samsung-galaxy-tab-s10-plus-5g_2_2_1.png',
    rating: 4.8,
    sold: '220',
    badge: 'S Pen',
  },
  {
    id: 'xiaomi-pad-7',
    name: 'Xiaomi Pad 7 8GB 128GB',
    category: 'tablet',
    brand: 'Xiaomi',
    price: '8.990.000đ',
    oldPrice: '10.490.000đ',
    discount: '-14%',
    gift: 'Tặng dán màn hình',
    image:
      'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/522/334530/xiaomi-pad-7-xam-1-638775430772452367-750x500.jpg',
    rating: 4.6,
    sold: '740',
    badge: 'Giá tốt',
  },
  {
    id: 'airpods-4',
    name: 'AirPods 4',
    category: 'accessory',
    brand: 'Apple',
    price: '2.990.000đ',
    oldPrice: '3.490.000đ',
    discount: '-14%',
    gift: 'Giảm thêm khi mua kèm iPhone',
    image:
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/a/i/airpods-4-2.png',
    rating: 4.7,
    sold: '2.1k',
    badge: 'Âm thanh',
  },
  {
    id: 'sony-wh-1000xm6',
    name: 'Sony WH-1000XM6',
    category: 'accessory',
    brand: 'Sony',
    price: '9.990.000đ',
    oldPrice: '11.990.000đ',
    discount: '-17%',
    gift: 'Tặng hộp đựng du lịch',
    image:
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/o/sony-wh-1000xm6-5.jpg',
    rating: 4.8,
    sold: '480',
    badge: 'Chống ồn',
  },
  {
    id: 'logitech-pro-x',
    name: 'Logitech Pro X Superlight 2C',
    category: 'accessory',
    brand: 'Logitech',
    price: '3.190.000đ',
    oldPrice: '3.990.000đ',
    discount: '-20%',
    gift: 'Tặng lót chuột gaming',
    image:
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/c/h/chuot-gaming-khong-day-logitech-pro-x-superlight-2c_1_.png',
    rating: 4.6,
    sold: '690',
    badge: 'Gaming',
  },
]

export const getProductsByCategory = (category: Product['category']) =>
  products.filter((product) => product.category === category)
