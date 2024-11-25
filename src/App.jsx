import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Product from "./components/Product";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductDetail from "./components/ProductDetail";
import Saree from "./components/Saree";
import SareeDetial from "./components/SareeDetial";
import Signup from "./pages/Signup";


const App = ()=>{
  const [data, setData]= useState(20)
  return (


<div>
  <Navbar/>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
  <Route path='/about'  element={<About/>}></Route>
  <Route path='/product' element={<Product/>}></Route>
  <Route path='/signup' element={<Signup/>}></Route>
  <Route path='/saree' element={<Saree/>}></Route>
  <Route path='/product/:id' element={<ProductDetail/>}></Route>
  <Route path='/saree/:slug' element={<SareeDetial/>}></Route>
</Routes>
</div>
  )
}

export default App;