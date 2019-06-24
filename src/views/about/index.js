import React from 'react';

export default class About extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.handleNotFound = this.handleNotFound.bind(this);
	}

	render() {
		return (
			<div className='about'>
				<h1>this is About page</h1>
				<button onClick={this.handleNotFound}>404</button>
			</div>
		);
	}

	handleNotFound() {
		const { history } = this.props;
		history.push('/404');
	}
}
