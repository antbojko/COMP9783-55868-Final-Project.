import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18 and newer
import App from './App.jsx';
import './styles.css'; // Make sure your styles are being applied

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
