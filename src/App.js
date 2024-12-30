// import './App.css';
// import DualDrawerSidebar from './components/ClippedDrawer/ClippedDrawer';
// import HeroSection from './components/HeroSection/HeroSection';
// import ImageSwiper from './components/SlideImgs/SlideImgs';

// import Header from './Header/Header';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// function App() {
//   return (
//     <div className="App">
//       < Header />
//       < HeroSection />
//       < ImageSwiper />
//       <DualDrawerSidebar />
//     </div>
//   );
// }

// export default App;



// import './App.css';
// import DualDrawerSidebar from './components/ClippedDrawer/ClippedDrawer';
// import Header from './Header/Header';
// import { Outlet } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import ImageSwiper from './components/SlideImgs/SlideImgs';
// import CartList from './components/AddToCart/AddToCart';
// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Outlet />
//       <ImageSwiper />
//       <DualDrawerSidebar />
//       <CartList />
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import './App.css';
// import { Outlet } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import DualDrawerSidebar from './components/ClippedDrawer/ClippedDrawer';
// import Header from './Header/Header';
// import ImageSwiper from './components/SlideImgs/SlideImgs';
// import CartList from './components/AddToCart/AddToCart';
// // import CartDrawer from './CartDrawer';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       {/* <CartDrawer /> */}
//       <Outlet />
//       <ImageSwiper />
//       <DualDrawerSidebar />
//       <CartList />
//     </div>
//   );
// }

// export default App;

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
