import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from '../components/AsyncComponent';
import importedComponent from 'react-imported-component';

const getAsyncComponent = path => {
	return importedComponent(() => import(`../components/${path}`));
};

const getAsyncView = path => {
	return importedComponent(() => import(`../views/${path}`));
};

const Layout = getAsyncComponent('Layout');
const SignIn = getAsyncComponent('SignIn');
const SignUp = getAsyncComponent('SignUp');
const NotFound = getAsyncComponent('NotFound');

const Home = getAsyncView('home');
const About = getAsyncView('about');
const Contact = getAsyncView('contact');

const notFoundRoute = {
	key: 'TO-NOT-FOUND-ROUTE',
	to: '/404'
};

const layoutRoutes = [
	{
		key: '/signin',
		path: '/signin',
		component: SignIn,
		exact: true
	},
	{
		key: '/signup',
		path: '/signup',
		component: SignUp,
		exact: true
	},
	{
		key: '/404',
		path: '/404',
		component: NotFound,
		exact: true
	},
	{
		key: '/view',
		path: '/view',
		component: Layout
	},
	{
		key: '/',
		from: '/',
		to: '/view/home',
		exact: true
	}
].concat(notFoundRoute);

const viewRoutes = [
	{
		key: '/view/home',
		path: '/view/home',
		component: Home,
		exact: true
	},
	{
		key: '/view/about',
		path: '/view/about',
		component: About,
		exact: true
	},
	{
		key: '/view/contact',
		path: '/view/contact',
		component: Contact,
		exact: true
	}
].concat(notFoundRoute);

const createRouter = routes => {
	const routeList = routes.map(route => {
		const redirect = Object.prototype.hasOwnProperty.call(route, 'to');
		return redirect ? <Redirect {...route} /> : <Route {...route} />;
	});
	return () => <Switch>{routeList}</Switch>;
};

export const LayoutRouter = createRouter(layoutRoutes);
export const ViewRouter = createRouter(viewRoutes);
