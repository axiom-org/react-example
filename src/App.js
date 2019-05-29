import React from "react";
import Axiom from "axiom-api";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.axiom = new Axiom();

    this.state = {
      message: null
    };
  }

  async onClick() {
    this.setState({ message: "click!" });
  }

  render() {
    if (this.state.message) {
      return <p>{this.state.message}</p>;
    }

    return <button onClick={() => this.onClick()}>Click Me</button>;
  }
}
