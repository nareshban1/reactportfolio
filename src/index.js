import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReactGA from 'react-ga';
ReactGA.initialize(`${process.env.REACT_APP_UA_ID}`); // add your tracking id here.
ReactGA.pageview(window.location.pathname + window.location.search);



ReactDOM.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

