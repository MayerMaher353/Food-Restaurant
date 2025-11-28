
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import  "./assets/css/global.css"
import "./assets/css/responsive.css";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CartProvider } from "./context/cartContext";
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById('root')!).render(
    <StrictMode>
    <CartProvider>
      <BrowserRouter>
      
        <App />
        </BrowserRouter>
   
    </CartProvider>
  </StrictMode>,
)
