import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import './Header.scss'


export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  handleProfileMenuOpen = () => {

  }

  render() {
    return (
      <div className='header'>
        <AppBar position="static">
          <Toolbar variant="dense">

            {/*<Typography variant="h6" color="inherit">*/}
            {/*  你好啊*/}
            {/*</Typography>*/}
            <IconButton
              edge="start"
              color="inherit"
              onClick={this.handleProfileMenuOpen}>
              <AccountCircle />
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton className='menu-btn' edge="end" color="inherit">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
