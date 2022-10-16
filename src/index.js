import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import './config.js';
import HomeComponent from './components/home/HomeComponent';
import NavbarComponent from './components/shared/navbarComponents';
import DashboardComponent from './components/secured/DashboardComponent';
import AddProductComponenet from './components/secured/AddProductComponenet';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavbarComponent></NavbarComponent>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeComponent />} />
        <Route path='/dashboard' element={<DashboardComponent />} />
        <Route path='/addProduct' element={<AddProductComponenet />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

