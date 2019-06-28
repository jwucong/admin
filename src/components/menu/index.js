import React from 'react';
import classNames from 'classNames'
import {Link, NavLink} from 'react-router-dom';
import menus from './config';

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

const Icon = props => {
  if (!props.icon) {
    return null
  }
  return (
    <ListItemIcon className='nav-icon'>
      {props.icon}
    </ListItemIcon>
  )
}

const LinkItem = props => {
  return (
    <div className='menu-item'>
      <NavLink to={props.path}>
        <ListItem button>
          <Icon/>
          <ListItemText primary={props.title}/>
        </ListItem>
      </NavLink>
    </div>
  )
}

const ExpandItem = props => {
  const [expand, toggleExpand] = React.useState(false);
  const handleClick = (event) => {
    event.persist()
    event.stopPropagation()
    console.log(event)
    toggleExpand(!expand)
  };
  const SubItem = () => {
    return props.children.map(item => {
      if (item.children) {
        return <ExpandItem key={item.path} {...item} />
      }
      return <LinkItem key={item.path} {...item}/>
    })
  }
  return (
    <div className='menu-item'>
      <ListItem button onClick={handleClick}>
        <Icon/>
        <ListItemText primary={props.title}/>
        {expand ? <ExpandLess/> : <ExpandMore/>}
      </ListItem>
      <Collapse in={expand} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <SubItem/>
        </List>
      </Collapse>
    </div>
  )
}

const Menu = () => {
  const classes = useStyles()
  const Item = () => {
    return menus.map(item => {
      if (item.children) {
        return <ExpandItem key={item.path} {...item} />
      }
      return <LinkItem key={item.path} {...item}/>
    })
  }
  return (
    <List component="div" className={classes.root}>
      <Item/>
    </List>
  )
}

export default Menu
