import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './redux/configureStore';
// import { PersistGate } from 'redux-persist/integration/react';
// import './styles/App.css';





ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <PersistGate persistor={persistor}> */}
          <App />
        {/* </PersistGate> */}
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


