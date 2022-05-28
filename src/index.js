import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as HUE from './App';
import reportWebVitals from './reportWebVitals';
// import Cach2 from './App';
// import { Product } from './API/APIData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <HUE.App />
  </div>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
