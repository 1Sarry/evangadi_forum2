import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap'
import { AuthProvider } from './components/Authv1/AuthContext'
import { BrowserRouter as Router } from 'react-router-dom'
import {ToastContainer } from 'react-toastify'
//import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ToastContainer />
          <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>,
)
