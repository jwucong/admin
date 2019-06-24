import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter } from 'react-router-dom';
import { LayoutRouter } from './routes';
import './App.scss';

const App = () => (
	<BrowserRouter>
		<LayoutRouter />
	</BrowserRouter>
);

export default hot(App);
