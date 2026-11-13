import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import 'bootswatch/dist/litera/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <ToastContainer position="top-right" autoClose={3000} theme="light" 
      newestOnTop pauseOnHover toastClassName="book-toast" 
      progressClassName="book-toast-progress"/>
    </BrowserRouter>
  </StrictMode>,
)
