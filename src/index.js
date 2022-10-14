import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import './config.js';
import HomeComponent from './components/home/HomeComponent';
import NavbarComponent from './components/shared/navbarComponents';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavbarComponent></NavbarComponent>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeComponent />} />
      </Routes>
    </BrowserRouter>
    <HomeComponent></HomeComponent>
  </React.StrictMode>
);

