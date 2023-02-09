import React from "react";
import { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    name: "Maryia",
  };

  onCnangeName() {
    this.setState({ name: "Alla" });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello {this.state.name}</h1>
        <button onClick={() => this.onCnangeName()}>Click here</button>
      </div>
    );
  }
}

export default App;
