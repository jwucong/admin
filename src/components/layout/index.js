import React from 'react';
import Menu from '../menu';
import Header from '../header';
import {ViewRouter} from '../../routes'
import './layout.scss';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  render() {
    console.log('layout render...')
    return (
      <div className='layout'>
        <Header></Header>
        <div className="body">
          <div className="sidebar">
            <Menu />
          </div>
          <div className="main-view">
            <ViewRouter></ViewRouter>
          </div>
        </div>
      </div>
    );
  }
}
