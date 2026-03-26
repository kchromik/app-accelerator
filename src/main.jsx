import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '@/App';
import StarterKitPage from '@/pages/StarterKitPage';
import '@/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/starter-kit" element={<StarterKitPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
