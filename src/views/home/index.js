import React from 'react';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.handleSignIn = this.handleSignIn.bind(this);
	}

	render() {
		return (
			<div>
        <div className="red">red</div>
        <div className="green">green</div>
				<h1>this is Home page</h1>
				<button onClick={this.handleSignIn}>Sign In</button>
			</div>
		);
	}

	componentWillMount() {
		console.log('componentWillMount props: %o', this.props);
	}

	componentDidMount() {
		console.log('componentDidMount props: %o', this.props);
	}

	componentWillReceiveProps(nextProps, nextContext) {
		console.log('nextProps: %o', nextProps);
		console.log('nextContext: %o', nextContext);
		console.log('props: %o', this.props);
	}
	handleSignIn() {
		const { history } = this.props;
		history.push('/signIn');
	}
}
