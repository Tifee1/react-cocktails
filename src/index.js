import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './components/context';

const root = ReactDom.createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
