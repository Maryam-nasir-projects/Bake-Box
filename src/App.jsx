
import CartSummary from "./components/order/CartSummary";
import ShopHeader from './components/layout/ShopHeader'
import ProductSection from './components/products/ProductSection'
import ReviewSection from './components/reviews/ReviewSection'
import OrderInfo from './components/order/OrderInfo'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div>
      <ShopHeader />
      <ProductSection />
      <ReviewSection />
      <CartSummary />
      <OrderInfo />
      <Footer />
    </div>
  )
}

export default App
