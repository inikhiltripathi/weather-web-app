import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import './index.css';

import App from './App';
import { SearchProvider } from './contexts/SearchContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CookiesProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </CookiesProvider>
    </BrowserRouter>
  </React.StrictMode>
);

