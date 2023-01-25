import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      
      <Navbar />

      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
)
