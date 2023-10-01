import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage';
import Vaults from './pages/Vaults/Vaults';
import VaultsInfo from './pages/VaultsInfo/VaultsInfo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/vaults' element={<Vaults/>}/>
      <Route path='/vaultsinfo' element={<VaultsInfo/>}/>
    </Routes>
  </BrowserRouter>
);

