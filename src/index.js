// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import App from './App';
// import HeroSection from './components/HeroSection/HeroSection';
// import AddToCart from './components/AddToCart/AddToCart';
// import SignIn from './auth/SignIn/SignIn';
// import SignUp from './auth/SignUp/SignUp';
// import ErrorPage from './components/error-page/ErrorPage';
// import CartList from './components/AddToCart/AddToCart';



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <HeroSection />, 
//       },
//       {
//         path: "add-to-cart",
//         element: <CartList />,
//       },
//     ],
//     errorElement: <ErrorPage />, 
//   },
//   {
//     path: "/sign-in",
//     element: < SignIn />,
//   },
//   {
//     path: "/sign-up",
//     element: <SignUp />,
//   },
// ]);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );




import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import HeroSection from './components/HeroSection/HeroSection';
import AddToCart from './components/AddToCart/AddToCart';
import SignIn from './auth/SignIn/SignIn';
import SignUp from './auth/SignUp/SignUp';
import ErrorPage from './components/error-page/ErrorPage';
import CartList from './components/AddToCart/AddToCart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HeroSection />, 
      },
      {
        path: "add-to-cart",
        element: <CartList />,
      },
    ],
    errorElement: <ErrorPage />, 
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './store';  // Make sure you have the store setup
// import App from './App';
// import HeroSection from './components/HeroSection/HeroSection';
// // import AddToCart from './components/AddToCart/AddToCart';
// import SignIn from './auth/SignIn/SignIn';
// import SignUp from './auth/SignUp/SignUp';
// import ErrorPage from './components/error-page/ErrorPage';
// // import CartList from './components/AddToCart/AddToCart';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <HeroSection />,
//       },
//     ],
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/sign-in",
//     element: <SignIn />,
//   },
//   {
//     path: "/sign-up",
//     element: <SignUp />,
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>   {/* Wrap with Provider and pass store */}
//       <RouterProvider router={router} />
//     </Provider>
//   </React.StrictMode>
// );
