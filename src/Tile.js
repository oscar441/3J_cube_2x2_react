import React, { Component } from "react";

class Tile extends Component {
  render() {
    let color = this.props.color;
    return (
      <div className="cube-1-tile" style={{ backgroundColor: color }}>
        {this.props.k}
      </div>
    );
  }
}

export default Tile;
