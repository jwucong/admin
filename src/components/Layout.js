import React from 'react';
import Menu from './Menu';
import { ViewRouter } from '../routes';
import './Layout.scss';

export default class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className='layout'>
				<div className='menu-container'>
					<Menu />
				</div>
				<div className='main-container'>
					<ViewRouter />
				</div>
			</div>
		);
	}
}
