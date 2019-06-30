import React from 'react';
import Menu from '../menu';
import Header from '../header';
import {ViewRouter} from '../../routes'
import './layout.scss';

const Layout = props => {
  return (
    <div className='layout'>
      <Header />
      <div className="body">
        <div className="sidebar">
          <Menu />
        </div>
        <div className="main-view">
          <ViewRouter />
        </div>
      </div>
    </div>
  );
}

export default Layout
