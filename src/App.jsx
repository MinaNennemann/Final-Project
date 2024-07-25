import React from "react";
import "./App.css";
import "antd/dist/reset.css"; // for antd@5, use 'antd/dist/antd.css' for antd@4
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Favorites from "./components/Favorites";
import Footer from "./components/Pages/Footer";
import About from "./components/Pages/AboutMe";
import Authors from "./components/Authors";
import QuoteOfTheDay from "./components/QuoteOfTheDay";



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/quoteoftheday" element={<QuoteOfTheDay/>}/>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
