import React from 'react'

export default class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  render() {
    return (
      <div className='about'>
        <h1>this is About page</h1>
        <button onClick={this.handleOnClick}>Sign In</button>
      </div>
    )
  }

  handleOnClick() {
    const {history} = this.props
    history.push('/signIn')
  }
}
