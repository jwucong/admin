import React from 'react'
import {withRouter} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import './header.scss'


const Header = props => {
  const navToPersonalCenter = () => {
    const isLogin = false
    const path = isLogin ? '/view/personal' : '/signin'
    props.history.push(path)
  }
  return (
    <div className='header'>
      <AppBar position="fixed" component='div'>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit">
            <MenuIcon/>
          </IconButton>
          <IconButton className='to-right' color="inherit">
            <Badge badgeContent={7} color="secondary">
              <NotificationsIcon/>
            </Badge>
          </IconButton>
          <IconButton color="inherit" onClick={navToPersonalCenter}>
            <AccountCircle/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}


export default withRouter(Header)
