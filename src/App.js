import React from 'react'
import Layout from './components/Layout'
import { hot } from 'react-hot-loader/root';


const App = () => (
  <div>
    this is app component
    <div>=====</div>
    <Layout />
  </div>
)

export default hot(App)
