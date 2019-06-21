import React from 'react'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <div>this is home page</div>
        <button onClick={this.navTo.bind(this)}>nfjnwj</button>
      </div>
    )
  }

  componentWillMount() {
    console.log('componentWillMount props: %o', this.props)
  }

  componentDidMount() {
    console.log('componentDidMount props: %o', this.props)
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log('nextProps: %o', nextProps)
    console.log('nextContext: %o', nextContext)
    console.log('props: %o', this.props)
  }

  navTo(path) {
    this.props.history.push('/about')
  }
}
