import React from 'react';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

  handleSignIn = () => {
    const { history } = this.props;
    history.push('/signIn');
  }

	render() {
		return (
			<div>
				<div className='red'>red</div>
				<div className='green'>green</div>
				<h1>this is Home page</h1>
				<button onClick={this.handleSignIn}>Sign In</button>
			</div>
		);
	}


}
