import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux';


const initialState = {
    info: {
      name: 'Kolya',
      age: 25,
      city: 'Kozlovsk',
      work: 'Builder'
    },
    friends: [
      {
        id: 1,
        name: 'Sonya',
        age: 20,
        city: 'Petrovsk',
        work: 'Model'
      },
      {
        id: 2,
        name: 'Tolya',
        age: 28,
        city: 'Moscow',
        work: 'Bloger'
      },
      {
        id: 3,
        name: 'Nikita',
        age: 24,
        city: 'Magadan',
        work: 'Barber'
      },
    ]
  

}

const reducer = (state = initialState,action) => {
    switch (action.type) {
      case 'addFrient':
        return '';
        
      default:
        return state;
    }
}

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


