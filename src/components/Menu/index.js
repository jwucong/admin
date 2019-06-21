import React from 'react'
import {Link} from "react-router-dom";

export default class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className='menu'>
        <ul>
          <li>
            <Link to='/home'>home</Link>
          </li>
          <li>
            <Link to='/about'>about</Link>
          </li>
          <li>
            <Link to='/contact'>contact</Link>
          </li>
        </ul>
      </div>
    )
  }
}
