import 'react-hot-loader';
import React from 'react';
import ReactDom from 'react-dom';
import App from './App'

const rootNode = document.getElementById('app')

ReactDom.render(
  <App/>
  ,
  rootNode
)
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App')
    ReactDOM.render(<NextApp />, rootNode)
  })
}

