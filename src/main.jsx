import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Products } from './components/Products.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Navbar } from './components/Navbar.jsx';
import ErrorPage  from './components/ErrorPage.jsx';
import ProductPage from './components/ProductPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <App /> },
      { path: 'products', element: <Products /> },
      { path: 'products/:name', element: <ProductPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
