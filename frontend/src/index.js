import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import './style.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducers from './reducers'

let store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <React.StrictMode>

  <Provider store={store}>
    <Routes />
  </Provider>  
  </React.StrictMode>,
  document.getElementById('root')
);

