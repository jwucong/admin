import React from 'react';
import classNames from 'classNames'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import './menu.scss'

const Menu = props => {
  const classList = classNames({
    menu: true,
    show: props.show
  })
  return (
    <div className={classList}>
      <Link to='/signin'>Sign In</Link>
    </div>
  )
}

const mapStateToProps = (a, b, c, d) => {
  console.group('mapStateToProps')
  console.log('a: %o', a)
  console.log('b: %o', b)
  console.log('c: %o', c)
  console.log('d: %o', d)
  console.groupEnd()
  return {...a}
}

export default connect(mapStateToProps)(Menu)
