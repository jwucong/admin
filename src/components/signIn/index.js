import React from 'react';
import './signIn.scss'

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  render() {
    return (
      <div className='sign-in'>
        <div className="left">Carousel</div>
        <div className="right">Form</div>
      </div>
    );
  }

  handleSignIn() {
    const { history } = this.props;
    history.push('/view3/home');
  }

  handleSignUp() {
    const { history } = this.props;
    history.push('/signUp');
  }
}
