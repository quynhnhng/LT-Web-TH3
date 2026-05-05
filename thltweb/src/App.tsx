import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import PhonePage from './pages/PhonePage'
import LaptopPage from './pages/LaptopPage'
import AccessoryPage from './pages/AccessoryPage'
import TabletPage from './pages/TabletPage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/"            element={<HomePage />} />
        <Route path="/dien-thoai"  element={<PhonePage />} />
        <Route path="/laptop"      element={<LaptopPage />} />
        <Route path="/phu-kien"    element={<AccessoryPage />} />
        <Route path="/tablet"      element={<TabletPage />} />
        <Route path="/gioi-thieu"  element={<AboutPage />} />
        <Route path="*"            element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App