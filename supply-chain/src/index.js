import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from "./routes";
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';




// Get the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the AppRoutes component
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();