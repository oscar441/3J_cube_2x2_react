import React, { Component } from "react";
import Face from "./Face.js";

class ThreeDCube extends Component {
  render() {
    return (
      <div className="three-d-cube">
        <div className="side top">
          <Face tiles={this.props.tiles[0]} />
        </div>
        <div className="side left">
          <Face tiles={this.props.tiles[5]} />
        </div>
        <div className="side front">
          <Face tiles={this.props.tiles[1]} />
        </div>
      </div>
    );
  }
}

export default ThreeDCube;
