import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss'

export default class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className='menu'>
				<ul>
					<li>
						<NavLink activeClassName='active' to='/view/home'>home</NavLink>
					</li>
					<li>
						<NavLink activeClassName='active' to='/view/about'>about</NavLink>
					</li>
					<li>
						<NavLink activeClassName='active' to='/view/contact'>contact</NavLink>
					</li>
				</ul>
			</div>
		);
	}
}
