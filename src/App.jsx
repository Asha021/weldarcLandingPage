import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Task from "./Componets/Task";
import { Route,Routes } from "react-router-dom";
import Contact from "./Componets/layout/ContactForm/Contact";
import HeroSec from "./Componets/layout/Home/HeroSec";
import Header from "./Componets/layout/Header";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Home from "./Componets/layout/Home/Home";
import Footer from "./Componets/layout/Footer";
import Thanku from "./Componets/layout/ContactForm/Thanku";
import MailMsg from "./Componets/layout/MailMsg/MailMsg";
import ScrollToTop from "./Componets/layout/Scroll/ScrollToTop";

function App() {
  useEffect(() => {
  AOS.init({ duration: 1000, once: true }); // `once: true` animates only once
}, []);


  return (
    <>
      {/* <div className="text-center mt-5">
        <button className="btn btn-danger" onClick={() => setShowTask(true)}>
          View Full Product Details
        </button>
      </div> */}
      
      {/* {showTask && (
        <div className="overlay" onClick={() => setShowTask(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowTask(false)}>
              &times;
            </button>
            <Task/>
          </div>
        </div>
      )} */}
      
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/product/:slug" element={  <Task /> } />
        <Route path="/contactus" element={<Contact /> }  />
        <Route path="/thanku" element={<Thanku /> }  />
        <Route path="/mail" element={<MailMsg /> }  />
      </Routes>
      <Footer  />
      
    </>
  );
}


export default App;
