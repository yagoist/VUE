import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const item = "Dmitrii"


ReactDOM.render(
  <React.StrictMode>
    <App name={item} />
    </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
