import React from 'react'

export default class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  render() {
    return (
      <div className='sign-in'>
        <h1>SignIn</h1>
        <button onClick={this.handleOnClick}>Sign In</button>
      </div>
    )
  }

  handleOnClick() {
    const {history} = this.props
    history.push('/view/home')
  }
}
