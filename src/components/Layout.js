import React from 'react'

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Layout',
      count: 0
    }
    this.counter = this.counter.bind(this)
  }

  render() {
    return (
      <div className='layout'>
        <div className="left">123</div>
        <div className="right">{this.state.count}</div>
        <button onClick={this.counter}>count</button>
      </div>
    )
  }

  counter() {
    this.setState({
      count: ++this.state.count
    })
  }

}
