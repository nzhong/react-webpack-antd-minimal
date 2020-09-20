import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { HashRouter as Router } from 'react-router-dom'

import reducers from './reducers';
import MainFrame from './modules/main/mainFrame'
import './css/main-body.css'
import 'antd/dist/antd.css';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware())
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MainFrame />
    </Router>
  </Provider>
  , document.querySelector('#main'));

