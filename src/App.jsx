import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Products from "./components/Products/Products"
import Cart from "./components/Cart/Cart"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import ProductDetails from "./components/ProductDetails/ProductDetails"


function App() {
  const state = useSelector(state => state.cart.value)

  useEffect(() => {
    localStorage.setItem('Amazon Cart', JSON.stringify(state))
  }, [state])

  return (
    <Routes>
      <Route path="/" element={(
        <>
          <Navbar/>
          <div className="container pb-[3rem]">
              <Products/>
          </div>
        </>
      )}/>
      <Route path="/products" element={(
        <>
          <Navbar/>
          <div className="container pb-[3rem]">
              <Products/>
          </div>
        </>
      )}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/products/:id" element={<ProductDetails/>}/>
    </Routes>
  )
}

export default App
