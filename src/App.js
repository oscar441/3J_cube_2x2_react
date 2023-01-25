import React, { Component } from "react";
import Cube from "./Cube.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        Rubik's Cube
        <Cube />
      </div>
    );
  }
}

export default App;
