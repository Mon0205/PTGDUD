import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Product from "./pages/Product";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import { CartProvider } from "./components/CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/product" element={<Product></Product>}></Route>
            <Route path="/product/:id" element={<Detail></Detail>}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter >
      </CartProvider>


    </>
  )
}

export default App
