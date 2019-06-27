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
import Menu from "../menu";


export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

  handleToggleMenu = () => {
    const show = !this.state.show
    this.setState({show})
    console.log(show)
  }

  render() {
    return (
      <div className='header'>
        <AppBar position="fixed">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit">
              <AccountCircle />
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              className='menu-btn'
              edge="end"
              color="inherit"
              onClick={this.handleToggleMenu}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Menu show={this.state.show} toggle={this.handleToggleMenu} />
      </div>
    )
  }
}
