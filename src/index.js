import 'regenerator-runtime/runtime';
import 'react-hot-loader';
import React from 'react';
import ReactDom from 'react-dom';
import App from './App'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}

