import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import HeroSection from './components/HeroSection/HeroSection';
import SignIn from './auth/SignIn/SignIn';
import SignUp from './auth/SignUp/SignUp';
import ErrorPage from './components/error-page/ErrorPage';
import AddToCart from './components/AddToCart/AddToCart';



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
        element: <AddToCart />,
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
