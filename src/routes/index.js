import React from 'react';
import importedComponent from 'react-imported-component';
import { Switch, Route, Redirect } from 'react-router-dom';

const getAsyncComponent = dir => {
	return importedComponent(() => import(`../components/${dir}`));
};

const getAsyncView = path => {
	return importedComponent(() => import(`../views/${path}`));
};

const Layout = getAsyncComponent('layout');
const SignIn = getAsyncComponent('signIn');
const SignUp = getAsyncComponent('SignUp');
const NotFound = getAsyncComponent('notFound');

const Home = getAsyncView('home');
const About = getAsyncView('about');
const Contact = getAsyncView('contact');
const Article = getAsyncView('article');
const Dashboard = getAsyncView('dashboard');
const UserManage = getAsyncView('userManage');
const ArticleManage = getAsyncView('articleManage');
const CategoryManage = getAsyncView('categoryManage');
const TagManage = getAsyncView('tagManage');
const SystemLogs = getAsyncView('systemLogs');

const notFoundRoute = {
	key: 'NOT-FOUND-ROUTE',
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
    key: '/article/:id',
    path: '/article/:id',
    component: Article,
    // exact: true
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
		key: '/view/dashboard',
		path: '/view/dashboard',
		component: Dashboard,
		exact: true
	},
	{
		key: '/view/userManage',
		path: '/view/userManage',
		component: UserManage,
		exact: true
	},
	{
		key: '/view/articleManage',
		path: '/view/articleManage',
		component: ArticleManage,
		exact: true
	},
  {
		key: '/view/categoryManage',
		path: '/view/categoryManage',
		component: CategoryManage,
		exact: true
	},
  {
    key: '/view/tagManage',
    path: '/view/tagManage',
    component: TagManage,
    exact: true
  },
  {
    key: '/view/systemLogs',
    path: '/view/systemLogs',
    component: SystemLogs,
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
