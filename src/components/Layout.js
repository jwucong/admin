import React from 'react'
import Menu from './Menu';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import createAsyncComponent from "./AsyncComponent";
import './Layout.scss'

const context = require.context('../views', true, /\.jsx?$/)
const routes = context.keys().map(item => {
  const name = item.replace(/^\.\/(.+)\/index\.jsx?$/, '$1')
  const link = item.replace(/^\.\//, '')
  console.log('item: %o', item)
  console.log('name: %o', name)
  console.log('link: %o', link)
  return {
    path: '/' + name,
    key: item,
    component: createAsyncComponent(import(`../views/${link}`)),
    exact: true
  }
})

console.log(context.keys())
console.log(routes)

const ViewRoutes = () => {
  const route = props => <Route {...props} />
  const Routes = () => routes.map(route)
  const Home = routes.filter(item => item.path === '/view/home')[0].component
  console.log(Home)
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Routes />
      <Redirect to='/404'></Redirect>
    </Switch>
  )
}

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {

    return (
      <div className='layout'>
        <div className='menu-container'>
          <Menu/>
        </div>
        <div className='main-container'>
          <ViewRoutes/>
        </div>
      </div>
    )
  }
}
