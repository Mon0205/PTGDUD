import { useState } from 'react'
import Home from './pages/Home';
import About from './pages/About';
import Recipes from './pages/Recipes';
import Yourrecipesbox from './pages/Yourrecipesbox';
import Cookingguide from './pages/Cookingguide';
import Search from './pages/Search';
import { Route } from 'react-router-dom';
import { BrowserRouter, createBrowserRouter, Router, RouterProvider, Routes } from 'react-router-dom';
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} path="/" />
          <Route path='/home' element={<Home />} />
          <Route path='/whattocook' element={<Cookingguide />} />
          <Route path='/about' element={<About />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/ingredients' element={<Yourrecipesbox />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </BrowserRouter>
      {/* <ToastContainer /> */}
    </div>
  )
}

export default App;
