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

const Article = getAsyncView('article');
const Dashboard = getAsyncView('dashboard');
const UserManage = getAsyncView('userManage');
const ArticleManage = getAsyncView('articleManage');
const CategoryManage = getAsyncView('categoryManage');
const TagManage = getAsyncView('tagManage');
const SystemLogs = getAsyncView('systemLogs');
const ArticleList = getAsyncView('articleManage/articleList');
const NewArticle = getAsyncView('articleManage/newArticle');
const Drafts = getAsyncView('articleManage/drafts');
const Trash = getAsyncView('articleManage/trash');

const notFoundRoute = {
	key: 'NOT-FOUND-ROUTE',
	to: '/404'
};

const layoutRoutes = [
	{
		path: '/signin',
		component: SignIn,
		exact: true
	},
	{
		path: '/signup',
		component: SignUp,
		exact: true
	},
	{
		path: '/404',
		component: NotFound,
		exact: true
	},
	{
		path: '/article/:id',
		component: Article
		// exact: true
	},
	{
		path: '/view',
		component: Layout
	},
	{
		key: '/',
		from: '/',
		to: '/view/dashboard',
		exact: true
	}
].concat(notFoundRoute);

const viewRoutes = [
	{
		path: '/view/dashboard',
		component: Dashboard,
		exact: true
	},
	{
		path: '/view/userManage',
		component: UserManage,
		exact: true
	},
	{
		path: '/view/articleManage',
		component: ArticleManage,
		exact: true
	},
	{
		path: '/view/categoryManage',
		component: CategoryManage,
		exact: true
	},
	{
		path: '/view/tagManage',
		component: TagManage,
		exact: true
	},
	{
		path: '/view/systemLogs',
		component: SystemLogs,
		exact: true
	},
	{
		path: '/view/articleList',
		component: ArticleList,
		exact: true
	},
	{
		path: '/view/newArticle',
		component: NewArticle,
		exact: true
	},
	{
		path: '/view/drafts',
		component: Drafts,
		exact: true
	},
	{
		path: '/view/trash',
		component: Trash,
		exact: true
	}
].concat(notFoundRoute);

const createRouter = routes => {
	const routeList = routes.map(route => {
		const redirect = Object.prototype.hasOwnProperty.call(route, 'to');
		if (redirect) {
			return <Redirect {...route} />;
		}
		return <Route key={route.path} {...route} />;
	});
	return () => <Switch>{routeList}</Switch>;
};

export const LayoutRouter = createRouter(layoutRoutes);
export const ViewRouter = createRouter(viewRoutes);
