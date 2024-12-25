import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Offer from "@/components/Offer"
import Products from "@/components/Products"

const ShopPage = () => {
  return (
    <div>
      <Header />
      <Hero page="Shop" />
      <Products />
      <Offer />
      <Footer />
    </div>
  )
}

export default ShopPage
