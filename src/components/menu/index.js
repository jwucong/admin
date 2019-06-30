import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse
} from '@material-ui/core';
import {ExpandLess, ExpandMore} from '@material-ui/icons';
import menus from './config';
import './menu.scss'

const Icon = props => {
  const ItemIcon = props.icon
  if (!ItemIcon) {
    return null
  }
  return (
    <ListItemIcon className='nav-icon'>
      <ItemIcon />
    </ListItemIcon>
  )
}

const Item = props => {
  return (
    <ListItem button className='nav-item' onClick={props.onClick}>
      <Icon icon={props.icon}/>
      <ListItemText primary={props.title}/>
      {props.children}
    </ListItem>
  )
}

const MenuItem = props => {
  const list = props.children
  const level = props.level || 1
  const hasSubmenu = Array.isArray(list) && list.length > 0
  const Container = props => {
    const classList = `menu-item level${level}`
    return <div className={classList}>{props.children}</div>
  }
  if (!hasSubmenu) {
    return (
      <Container>
        <NavLink
          className='nav-link'
          activeClassName='active'
          to={props.path}>
          <Item icon={props.icon} title={props.title}/>
        </NavLink>
      </Container>
    )
  }

  const active = list.some(item => props.location.pathname === item.path)
  const [expand, setExpand] = React.useState(active);
  const toggleExpand = () => setExpand(!expand)
  const MenuItemWithRouter = withRouter(MenuItem)
  const Submenu = () => list.map(item => {
    return <MenuItemWithRouter level={level + 1} key={item.path} {...item} />
  })

  return (
    <Container>
      <Item
        icon={props.icon}
        title={props.title}
        onClick={toggleExpand}>
        {expand ? <ExpandLess/> : <ExpandMore/>}
      </Item>
      <Collapse in={expand} timeout={1000}>
        <List component="div">
          <Submenu />
        </List>
      </Collapse>
    </Container>
  )
}

const Menu = () => {
  const MenuItemWithRouter = withRouter(MenuItem)
  const Submenu = () => menus.map(item => {
    return <MenuItemWithRouter key={item.path} {...item}/>
  })
  return (
    <List component="div" className='menu'>
      <Submenu />
    </List>
  )
}

export default Menu
