import 'regenerator-runtime/runtime';
import 'react-hot-loader';
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

ReactDom.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept()
}
