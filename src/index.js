import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//Initialy desabled buttons. 
document.getElementById("btn_Stop").disabled = true;
document.getElementById("btn_Auto").disabled = true;

