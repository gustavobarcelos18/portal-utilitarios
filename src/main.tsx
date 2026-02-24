import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

//pega o elemento root e renderiza o app react dentro dele
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
