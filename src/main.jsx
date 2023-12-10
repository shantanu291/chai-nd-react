import React, { createElement } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Hook from './Hooks/useState.jsx'





ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <App />
    <Hook/>
  </React.StrictMode>
)
