import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter } from 'react-router-dom';
import { LayoutRouter } from './routes';
import './assets/style/style.less';
import './assets/style/test.styl';
import './assets/style/test.stylus';

const App = () => (
	<BrowserRouter>
		<LayoutRouter />
	</BrowserRouter>
);

export default hot(App);
