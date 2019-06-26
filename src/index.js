import 'regenerator-runtime/runtime';
import 'react-hot-loader';
import {setConfig} from 'react-hot-loader'
import {Provider} from 'react-redux'
import store from './store'

setConfig({
  reloadHooks: false
})

import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

ReactDom.render(
  <Provider store={store}>
    <App/>
  </Provider>
  ,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}
