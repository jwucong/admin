import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Button } from 'antd';
import './Menu.scss';

const { SubMenu } = Menu;

const ItemContent = props => {
	const ItemIcon = () => (props.icon ? <Icon type={props.icon} /> : null);
	const Content = () => (
		<>
			<ItemIcon />
			<span>{props.title}</span>
		</>
	);
	if (props.link) {
		return (
			<Link className='link' to={props.link}>
				<Content />
			</Link>
		);
	}
	return <Content />;
};

export default class MenuComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: false
		};
	}

	toggleCollapsed = () => {
		const collapsed = !this.state.collapsed;
		this.setState({ collapsed });
	};

	render() {
		return (
			<Menu
				className='menu'
				defaultSelectedKeys={['1']}
				defaultOpenKeys={['sub1']}
				mode='inline'
				theme='light'
				onClick={this.toggleCollapsed}>
				<Menu.Item key='1'>
					<ItemContent icon='container' title='Home' link='/view/home' />
				</Menu.Item>
				<Menu.Item key='2'>
					<ItemContent icon='container' title='About' link='/view/about' />
				</Menu.Item>
				<Menu.Item key='3'>
					<ItemContent icon='container' title='Contact' link='/view/contact' />
				</Menu.Item>
				<SubMenu
					className='submenu'
					key='sub1'
					title={
						<span>
							<Icon type='mail' />
							<span>Navigation One</span>
						</span>
					}>
					<Menu.Item key='5'>Option 5</Menu.Item>
					<Menu.Item key='6'>Option 6</Menu.Item>
					<Menu.Item key='7'>Option 7</Menu.Item>
					<Menu.Item key='8'>Option 8</Menu.Item>
				</SubMenu>
				<SubMenu
					key='sub2'
					title={
						<span>
							<Icon type='appstore' />
							<span>Navigation Two</span>
						</span>
					}>
					<Menu.Item key='9'>Option 9</Menu.Item>
					<Menu.Item key='10'>Option 10</Menu.Item>
					<SubMenu key='sub3' title='Submenu'>
						<Menu.Item key='11'>Option 11</Menu.Item>
						<Menu.Item key='12'>Option 12</Menu.Item>
					</SubMenu>
				</SubMenu>
			</Menu>
		);
	}
}
