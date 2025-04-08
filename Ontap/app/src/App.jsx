import { useState } from 'react'
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom'
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './page/Home';
import Cart from './components/Cart';
import Product from './components/Product';
import { CartProvider } from './components/CartContext';
import ProductDetail from './components/Footer';
function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home></Home>} ></Route>
            <Route path='/product' element={<Product></Product>}></Route>
            <Route path='/cart' element={<Cart></Cart>} ></Route>
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
