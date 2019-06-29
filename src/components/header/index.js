import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import './header.scss'



export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  navToPersonalCenter = () => {
    const isLogin = false
    const path = isLogin ? '/view/personal' : '/signin'
    console.log(this.props)
    this.props.history.push(path)
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return false
  }

  render() {
    return (
      <div className='header'>
        <AppBar position="fixed" component='div'>
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit">
              <MenuIcon />
            </IconButton>
            <IconButton className='to-right' color="inherit">
              <Badge badgeContent={7} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit" onClick={this.navToPersonalCenter}>
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
