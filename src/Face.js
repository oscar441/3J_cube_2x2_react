import React, { Component } from "react";
import "./App.css";

class Face extends Component {
  render() {
    return <div className="cube-1-face-1">{this.props.tiles}</div>;
  }
}

export default Face;
