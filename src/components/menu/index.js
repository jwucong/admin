import React from 'react';
import classNames from 'classNames'
import {Link} from 'react-router-dom';
import {createMuiTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import './menu.scss'
import {blue} from "@material-ui/core/colors";

const menuAppBarTheme = createMuiTheme({
  palette: {
    primary: {
      main: blue[700]
    },
  },
});

const Menu = props => {
  const classList = classNames({
    menu: true,
    show: props.show
  })

  return (
    <div className={classList}>
      <div className="topbar">
        <IconButton
          className="close-btn"
          edge='end'
          onClick={props.toggle}>
          <CloseIcon></CloseIcon>
        </IconButton>
      </div>
      <Link to='/signin'>Sign In</Link>
    </div>
  )
}


export default Menu
