import React from 'react';
import Menu from './Menu';
import Header from './Header';
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

				{/*<div className='menu-container'>*/}
				{/*	<Menu />*/}
				{/*</div>*/}
				<Menu show={this.state.showMenu} />
				<div className='main-container'>
					<ViewRouter />
				</div>
			</div>
		);
	}
}
