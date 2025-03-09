
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from './pages/Details';
import Cart from './pages/Cart';
import { useState } from 'react';
import {ToastContainer} from 'react-toastify';
import'react-toastify/dist/ReactToastify.css';


function App() {
  const[cartItems,setCartItems]=useState([]);
  return (
    <>
      <div>
       <Router>
        <div>
        <ToastContainer theme="dark" position="top-center"/>
          <Header cartItems={cartItems}/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/search" element={<Home/>}/>
            <Route path="/product/:id" element={<Details cartItems={cartItems} setCartItems={setCartItems}/>}/>
            <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}/>
          </Routes>
          <Footer/>
        </div>
       </Router>
      </div>
   
    </>
  )
}

export default App