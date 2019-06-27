import React from 'react';
import Menu from './menu';
import Header from './header';
import { ViewRouter } from '../routes';
import './Layout.scss';

export default class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showMenu: false
		};
	}

	render() {
		return (
			<div className='layout'>
        <Header></Header>
				<div className='main-container'>
					<ViewRouter />
				</div>
			</div>
		);
	}
}
