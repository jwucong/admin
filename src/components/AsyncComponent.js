import React from 'react'

export default function asyncComponent(importComponent) {
  class AsyncComponent extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        component: null
      }
    }

    async componentDidMount() {
      const module = await importComponent()
      this.setState({
        component: module.default
      })
    }

    render() {
      const Component = this.state.component
      const props = this.props
      return Component ? <Component {...props} /> : null
    }
  }
  return AsyncComponent
}
