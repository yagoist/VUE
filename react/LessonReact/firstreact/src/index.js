import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const item = "Dmitrii"


ReactDOM.render(
  <React.StrictMode>
    <App name={item} />
    </React.StrictMode>,
  document.getElementById('root')
);



