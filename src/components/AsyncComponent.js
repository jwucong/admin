import React from 'react';

export default function asyncComponent(importer) {
	class AsyncComponent extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				component: null
			};
		}

		async componentDidMount() {
			const module = await importer();
			this.setState({
				component: module.default
			});
		}

		render() {
			const Component = this.state.component;
			return Component ? <Component {...this.props} /> : null;
		}
	}
	return AsyncComponent;
}
