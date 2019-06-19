import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'


import React from 'react'
import asyncComponent from '../components/AsyncComponent'
const Home = asyncComponent(() => import('../views/home'))
const About = asyncComponent(() => import('../views/about'))
const Contact = asyncComponent(() => import('../views/contact'))


export default () => {
  return (
    <>
      <Route path='/home' component={Home}></Route>
      <Route path='/about' component={About}></Route>
      <Route path='/contact' component={Contact}></Route>
    </>
  )
}
