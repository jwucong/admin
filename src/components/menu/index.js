import React from 'react';
import classNames from 'classNames'
import {NavLink} from 'react-router-dom';

import {makeStyles} from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import './menu.scss'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 200,
    backgroundColor: '#fff',
  },
}));

const Nav = props => {
  return (
    <NavLink
      to={props.link}
      className='nav-item'
      activeClassName='nav-active'>
      <ListItem className={props.level} button>
        <ListItemIcon className='nav-icon'>
          {props.icon}
        </ListItemIcon>
        <ListItemText className='nav-text' primary={props.children}/>
      </ListItem>
    </NavLink>
  )
}

const Menu = props => {
  const classList = classNames({
    menu: true,
    show: props.show
  })

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <div className='menu'>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}>
        <Nav
          icon={<SendIcon/>}
          level='level1'
          link='/view/dashboard'>
          仪表盘
        </Nav>
        <Nav
          icon={<SendIcon/>}
          level='level1'
          link='/view/userManage'>
          用户管理
        </Nav>
        <Nav
          icon={<SendIcon/>}
          level='level1'
          link='/view/articleManage'>
          文章管理
        </Nav>
        <Nav
          icon={<SendIcon/>}
          level='level1'
          link='/view/categoryManage'>
          分类管理
        </Nav>
        <Nav
          icon={<SendIcon/>}
          level='level1'
          link='/view/tagManage'>
          标签管理
        </Nav>
        <Nav
          icon={<SendIcon/>}
          level='level1'
          link='/view/systemLogs'>
          系统日志
        </Nav>
        <ListItem className='level1' button>
          <ListItemIcon>
            <SendIcon/>
          </ListItemIcon>
          <ListItemText primary="Sent mail"/>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon/>
          </ListItemIcon>
          <ListItemText primary="Drafts"/>
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon/>
          </ListItemIcon>
          <ListItemText primary="Inbox"/>
          {open ? <ExpandLess/> : <ExpandMore/>}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder/>
              </ListItemIcon>
              <ListItemText primary="Starred"/>
            </ListItem>
          </List>
        </Collapse>
      </List>
    </div>
  )
}


export default Menu
