import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './components/provider/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './components/router/Router.jsx'
import { Helmet, HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
