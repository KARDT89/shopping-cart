import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Products } from './components/Products.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Navbar } from './components/Navbar.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import ProductPage from './components/ProductPage.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from '@/components/ui/sonner';
import Cart from './components/Cart.jsx';
import { CreateProduct } from './components/CreateProduct.jsx';
import { CartProvider } from './context/CartContext.jsx';
import Login from './components/auth/Login';
import Register from './components/auth/Signup';
import ForgotPassword from './components/auth/ForgotPassword';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <App /> },
      { path: 'products', element: <Products /> },
      { path: 'products/:id', element: <ProductPage /> },
      { path: 'cart', element: <Cart /> },
      { path: 'create', element: <CreateProduct /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Register /> },
      { path: 'forgot-password', element: <ForgotPassword /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster />
      </CartProvider>
    </QueryClientProvider>
  </StrictMode>
);
