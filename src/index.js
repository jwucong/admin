import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import App from './App'

const rootNode = document.getElementById('app')

const hotRender = Component => ReactDom.render(
  <AppContainer>
    <Component/>
  </AppContainer>
  ,
  rootNode
)

hotRender(App)


if (module.hot) {
  module.hot.accept('./App.js', () => hotRender(App));
}
