import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Products } from './components/Products.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Navbar } from './components/Navbar.jsx';
import { ErrorPage } from './components/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <App /> },
      { path: 'products', element: <Products /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
