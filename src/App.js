import React from 'react'
import Layout from './components/Layout'
import { hot } from 'react-hot-loader/root';
import './App.scss'

const App = () => (
  <div className='app'>
    this is app component
    <div>=====</div>
    <Layout />
  </div>
)

export default hot(App)
