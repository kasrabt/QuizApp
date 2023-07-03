import React from 'react';
import ReactDOM from 'react-dom/client';
import './input.css';
import App from './App';
import ContextProvider from "./store/Context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ContextProvider>
          <App />
      </ContextProvider>

  </React.StrictMode>
);

