import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import DualDrawerSidebar from './components/ClippedDrawer/ClippedDrawer';
import Header from './Header/Header';
import ImageSwiper from './components/SlideImgs/SlideImgs';
import CartList from './components/AddToCart/AddToCart';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <ImageSwiper />
      <DualDrawerSidebar />
      <CartList />
    </div>
  );
}

export default App;
