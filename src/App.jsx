// import { useState } from 'react'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Home from "./component/Home/Home.jsx";
import Footer from "./Footer.jsx";
import Portfolio from "./component/Portfolio/Portfolio.jsx";
import Contact from "./component/Form/Form.jsx";
import Process from "./component/Process/Process.jsx"
import Testimonials from "./component/Testimonials/Testimonials.jsx"
import About from "./component/About/About.jsx"
import Blog from "./component/Blog/Blog.jsx"




function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Process' element={< Process/>} />
        <Route path='/Testimonials' element={< Testimonials/>} />
         <Route path="/About" element={<About/>} />
        <Route path="/Blog" element={<Blog/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
