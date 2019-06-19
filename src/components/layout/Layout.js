import React from 'react'
import {Link} from "react-router-dom";
import Aaa from '../../router'
import './Layout.scss'

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Layout',
      count: 0
    }
    this.counter = this.counter.bind(this)
  }

  render() {
    return (
      <div className='layout'>
        <div className="menu-container">
          <ul>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="main-container">
          <Aaa />
        </div>
      </div>
    )
  }

  componentDidMount() {
  }

  counter() {
    const count = this.state.count + 1
    this.setState({count})
  }

}
