import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



const injectGA = () => {
  if (typeof window == 'undefined') {
    return;
  }
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', process.env.REACT_APP_UA_ID);
};

ReactDOM.render(

  <React.StrictMode>
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_UA_ID}`}></script>
    <script>{injectGA()}</script>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

