
import Router from './routes'
import {BrowserRouter} from 'react-router-dom'

import {hot} from 'react-hot-loader/root';
import './App.scss'

const App = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
)

export default hot(App)
