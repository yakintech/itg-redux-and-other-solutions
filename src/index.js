import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CounterProvider } from './context/CounterContext';
import { CartProvider } from './context/CartContext';
import sayacReducer from './store/sayacSlice';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer: {
    sayac: sayacReducer
  }
})

root.render(
  <Provider store={store}>
    <CartProvider>
      <CounterProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CounterProvider>
    </CartProvider>
  </Provider>
);

