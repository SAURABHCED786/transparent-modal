import { Stack } from "@shopify/polaris";
import React, { Component } from "react";

class Welcome extends Component {
  constructor() {
    alert("Inital class constructor");
    super();
    const handleChange = () => {
      alert("handleChange ")
    }
    handleChange()
  }

  render() {
    { alert("render") }
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default Welcome;