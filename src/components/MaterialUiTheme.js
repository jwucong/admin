import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blue } from '@material-ui/core/colors';

const defaultTheme = createMuiTheme({
	palette: {
		primary: {
			main: blue[700]
		}
	}
});

export default props => (
	<ThemeProvider theme={defaultTheme}>{props.children}</ThemeProvider>
);
