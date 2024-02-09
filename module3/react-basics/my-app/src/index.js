import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //incase of default export you can use any name
// import { AnotherApp } from './App'; // incase of named export name should be same as exported.
// console.log(AnotherApp);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
