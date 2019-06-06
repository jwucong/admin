import React from 'react'
import { hot } from 'react-hot-loader/root';
import Children from './Children'

export default hot(() => (
  <div>
    this is app component
    <div>---</div>
    <Children></Children>
  </div>
))
