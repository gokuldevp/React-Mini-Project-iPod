import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import App from './App';

// Create a root instance to render the React app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the React app inside a StrictMode component for additional checks in development
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
