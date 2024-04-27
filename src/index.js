import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CounterProvider } from './context/CounterContext';
import { CartContext, CartProvider } from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <CounterProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CounterProvider>
  </CartProvider>



);

