import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Layout from '../components/Layout'
import createAsyncComponent from '../components/AsyncComponent'

const getAsyncComponent = path => {
  return createAsyncComponent(import(`../components/${path}`))
}

const getAsyncView = path => {
  return createAsyncComponent(import(`../views/${path}`))
}

const SignIn = getAsyncComponent('SignIn')
const SignUp = getAsyncComponent('SignUp')
const NotFound = getAsyncComponent('NotFound')
const Home = getAsyncView('home')


const Router = () => {
  return (
    <Switch>
      {/*<Route exact path='/' component={Layout} />*/}
      <Redirect from='/' to='/signIn'></Redirect>
      <Route exact path='/signIn' component={SignIn}/>
      <Route exact path='/signUp' component={SignUp}/>
      <Route exact path='/404' component={NotFound}/>
      <Redirect to='/404'></Redirect>
    </Switch>
  )
}

export default Router
