import React from 'react';

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
				<h1>SignIn</h1>
				<button onClick={this.handleSignIn}>Sign In</button>
				<button onClick={this.handleSignUp}>Sign Up</button>
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
