import React from 'react';
import {hot} from 'react-hot-loader/root';
import {BrowserRouter} from 'react-router-dom';
import {LayoutRouter} from './routes';
import Theme from './components/MaterialUiTheme'
import './assets/style/common.scss'


const App = () => (
  <BrowserRouter>
    <Theme>
      <LayoutRouter/>
    </Theme>
  </BrowserRouter>
);

export default hot(App);
