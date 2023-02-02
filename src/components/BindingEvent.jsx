import React, { Component } from 'react'

class BindingEvent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      message: 'Good Morning'
    }
    this.clickHandler3 = this.clickHandler3.bind(this)
  }
  clickHandler1() {
    this.setState({
      message: 'Hello..'
    })
  }

  clickHandler2 = () => {
    this.setState({
      message: 'Hellw Again..'
    })
  }
  clickHandler3() {
    this.setState({
      message: 'Hellw Once Again..'
    })
  }

  clickHandler4 = () => {
    this.setState({
      message: 'Good Bye!..'
    })
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler1.bind(this)} >
          this.clickHandler1.bind(this)
        </button><br />
        <button onClick={() => this.clickHandler2()} >
          () =&gt; this.clickHandle2()</button><br />
        <button onClick={this.clickHandler3} >this.clickHandler3</button>
        <br />
        <button onClick={this.clickHandler4} >this.clickHandler4</button>
      </div>
    )
  }
}

export default BindingEvent
