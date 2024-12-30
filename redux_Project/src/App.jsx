import { useState } from "react";
import "./App.css";
import Home from "./Home";
import Cart from "./Cart";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Nav from "./Nav";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <>
          <BrowserRouter>
              <Nav/>
              <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
              </Routes>
          </BrowserRouter>
          <ToastContainer/>
    </>
  );
}

export default App;
