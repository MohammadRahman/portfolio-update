import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './app.scss'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);