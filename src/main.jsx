// main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';; // Import createRoot from react-dom
import { Provider } from 'react-redux';
import store from '../redux/store'; // Import your Redux store
import App from './App';
import './index.css'

// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);

