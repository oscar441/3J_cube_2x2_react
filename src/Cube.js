import React, { Component } from "react";
import Face from "./Face.js";
import Tile from "./Tile.js";
import ThreeDCube from "./ThreeDCube.js";
import "./App.css";
const colors = ["white", "red", "orange", "green", "blue", "yellow"];

class Cube extends Component {
  constructor(props) {
    super(props);
    let corners = [
      this.getCorner([colors[0], colors[3], colors[1], 0]),
      this.getCorner([colors[0], colors[1], colors[4], 1]),
      this.getCorner([colors[0], colors[4], colors[2], 2]),
      this.getCorner([colors[0], colors[2], colors[3], 3]),
      this.getCorner([colors[5], colors[3], colors[1], 4]),
      this.getCorner([colors[5], colors[1], colors[4], 5]),
      this.getCorner([colors[5], colors[4], colors[2], 6]),
      this.getCorner([colors[5], colors[2], colors[3], 7])
    ];

    this.state = {
      permutation: [0, 1, 2, 3, 4, 5, 6, 7],
      corners: corners
    };
  }

  getCorner = (colors) => {
    return [
      <Tile
        key={"_" + colors[3] + 0}
        k={"corner " + colors[3] + ", tile " + 0}
        color={colors[0]}
      />,
      <Tile
        key={"_" + colors[3] + 1}
        k={"corner " + colors[3] + ", tile " + 1}
        color={colors[1]}
      />,
      <Tile
        key={"_" + colors[3] + 2}
        k={"corner " + colors[3] + ", tile " + 2}
        color={colors[2]}
      />
    ];
  };

  performMove = (move) => {
    switch (move) {
      case "X":
        this.rotateCubeLeft();
        this.rotateTop();
        this.rotateCubeRight();
        this.rotateCubeRight();
        this.reverseRotateTop();
        this.rotateCubeLeft();
        break;
      case "Xi":
        this.rotateCubeLeft();
        this.reverseRotateTop();
        this.rotateCubeRight();
        this.rotateCubeRight();
        this.rotateTop();
        this.rotateCubeLeft();
        break;
      case "Y":
        this.rotateTop();
        this.rotateBottom();
        break;
      case "Yi":
        this.reverseRotateTop();
        this.reverseRotateBottom();
        break;
      case "Z":
        this.rotateCubeLeft();
        break;
      case "Zi":
        this.rotateCubeRight();
        break;
      case "R":
        this.rotateCubeLeft();
        this.rotateTop();
        this.rotateCubeRight();
        break;
      case "Ri":
        this.rotateCubeLeft();
        this.reverseRotateTop();
        this.rotateCubeRight();
        break;
      case "L":
        this.rotateCubeRight();
        this.reverseRotateTop();
        this.rotateCubeLeft();
        break;
      case "Li":
        this.rotateCubeRight();
        this.rotateTop();
        this.rotateCubeLeft();
        break;
      case "U":
        this.rotateTop();
        break;
      case "Ui":
        this.reverseRotateTop();
        break;
      case "D":
        this.rotateBottom();
        break;
      case "Di":
        this.reverseRotateBottom();
        break;
      case "F":
        this.rotateFront();
        break;
      case "Fi":
        this.reverseRotateFront();
        break;
      case "B":
        this.rotateBack();
        break;
      case "Bi":
        this.reverseRotateBack();
        break;
      default:
        alert("move " + move + " is not defined");
    }
  };

  rotateCubeLeft = () => {
    this.reverseRotateFront();
    this.reverseRotateBack();
  };

  rotateCubeRight = () => {
    this.rotateFront();
    this.rotateBack();
  };

  rotateFront = () => {
    let c = this.state.corners;
    let tmp = c[0][0];
    c[0][0] = c[4][1];
    c[4][1] = c[5][0];
    c[5][0] = c[1][2];
    c[1][2] = tmp;
    tmp = c[1][1];
    c[1][1] = c[0][2];
    c[0][2] = c[4][2];
    c[4][2] = c[5][1];
    c[5][1] = tmp;
    tmp = c[1][0];
    c[1][0] = c[0][1];
    c[0][1] = c[4][0];
    c[4][0] = c[5][2];
    c[5][2] = tmp;
    this.setState({ corners: c });
  };

  reverseRotateFront = () => {
    let c = this.state.corners;
    let tmp = c[0][0];
    c[0][0] = c[1][2];
    c[1][2] = c[5][0];
    c[5][0] = c[4][1];
    c[4][1] = tmp;
    tmp = c[1][1];
    c[1][1] = c[5][1];
    c[5][1] = c[4][2];
    c[4][2] = c[0][2];
    c[0][2] = tmp;
    tmp = c[1][0];
    c[1][0] = c[5][2];
    c[5][2] = c[4][0];
    c[4][0] = c[0][1];
    c[0][1] = tmp;
    this.setState({ corners: c });
  };

  rotateBack = () => {
    let c = this.state.corners;
    let tmp = c[3][0];
    c[3][0] = c[7][2];
    c[7][2] = c[6][0];
    c[6][0] = c[2][1];
    c[2][1] = tmp;
    tmp = c[2][2];
    c[2][2] = c[3][1];
    c[3][1] = c[7][1];
    c[7][1] = c[6][2];
    c[6][2] = tmp;
    tmp = c[2][0];
    c[2][0] = c[3][2];
    c[3][2] = c[7][0];
    c[7][0] = c[6][1];
    c[6][1] = tmp;
    this.setState({ corners: c });
  };

  reverseRotateBack = () => {
    let c = this.state.corners;
    let tmp = c[3][0];
    c[3][0] = c[2][1];
    c[2][1] = c[6][0];
    c[6][0] = c[7][2];
    c[7][2] = tmp;
    tmp = c[2][2];
    c[2][2] = c[6][2];
    c[6][2] = c[7][1];
    c[7][1] = c[3][1];
    c[3][1] = tmp;
    tmp = c[2][0];
    c[2][0] = c[6][1];
    c[6][1] = c[7][0];
    c[7][0] = c[3][2];
    c[3][2] = tmp;
    this.setState({ corners: c });
  };

  rotateTop = () => {
    let c = this.state.corners;
    let tmp = c[0];
    c[0] = c[1];
    c[1] = c[2];
    c[2] = c[3];
    c[3] = tmp;
    this.setState({ corners: c });
  };

  rotateBottom = () => {
    let c = this.state.corners;
    let tmp = c[4];
    c[4] = c[5];
    c[5] = c[6];
    c[6] = c[7];
    c[7] = tmp;
    this.setState({ corners: c });
  };

  reverseRotateTop = () => {
    let c = this.state.corners;
    let tmp = c[0];
    c[0] = c[3];
    c[3] = c[2];
    c[2] = c[1];
    c[1] = tmp;
    this.setState({ corners: c });
  };

  reverseRotateBottom = () => {
    let c = this.state.corners;
    let tmp = c[4];
    c[4] = c[7];
    c[7] = c[6];
    c[6] = c[5];
    c[5] = tmp;
    this.setState({ corners: c });
  };

  scramble = () => {
    let moves = [
      "X",
      "Xi",
      "Y",
      "Yi",
      "Z",
      "Zi",
      "R",
      "Ri",
      "L",
      "Li",
      "U",
      "Ui",
      "D",
      "Di",
      "F",
      "Fi",
      "B",
      "Bi"
    ];
    for (let i = 0; i < 20; i++) {
      let r = Math.floor(moves.length * Math.random());
      this.performMove(moves[r]);
    }
  };

  render() {
    let tilesArranged = [
      [
        this.state.corners[3][0],
        this.state.corners[2][0],
        this.state.corners[0][0],
        this.state.corners[1][0]
      ], // top
      [
        this.state.corners[0][2],
        this.state.corners[1][1],
        this.state.corners[4][2],
        this.state.corners[5][1]
      ], // front
      [
        this.state.corners[7][0],
        this.state.corners[6][0],
        this.state.corners[4][0],
        this.state.corners[5][0]
      ], // bottom
      [
        this.state.corners[2][2],
        this.state.corners[3][1],
        this.state.corners[6][2],
        this.state.corners[7][1]
      ], // back
      [
        this.state.corners[6][1],
        this.state.corners[5][2],
        this.state.corners[2][1],
        this.state.corners[1][2]
      ], // right
      [
        this.state.corners[7][2],
        this.state.corners[3][2],
        this.state.corners[4][1],
        this.state.corners[0][1]
      ] // left
    ];
    let faces = tilesArranged.map((ta, i) => {
      return <Face tiles={ta} key={`f_${i}`} />;
    });
    return (
      <div className="main-view">
        <div className="cube-views">
          <div className="cube-1">{faces}</div>
          <div className="cube-2">
            <ThreeDCube tiles={tilesArranged} />
          </div>
        </div>
        <div className="controls">
          <div className="pointer" onClick={() => this.performMove("X")}>
            X
          </div>
          <div className="pointer" onClick={() => this.performMove("Xi")}>
            Xi
          </div>
          <div className="pointer" onClick={() => this.performMove("Y")}>
            Y
          </div>
          <div className="pointer" onClick={() => this.performMove("Yi")}>
            Yi
          </div>
          <div className="pointer" onClick={this.rotateCubeRight}>
            Z
          </div>
          <div className="pointer" onClick={this.rotateCubeLeft}>
            Zi
          </div>
          <div className="pointer" onClick={() => this.performMove("R")}>
            R
          </div>
          <div className="pointer" onClick={() => this.performMove("Ri")}>
            Ri
          </div>
          <div className="pointer" onClick={() => this.performMove("L")}>
            L
          </div>
          <div className="pointer" onClick={() => this.performMove("Li")}>
            Li
          </div>
          <div className="pointer" onClick={this.rotateTop}>
            U
          </div>
          <div className="pointer" onClick={this.reverseRotateTop}>
            Ui
          </div>
          <div className="pointer" onClick={() => this.rotateBottom()}>
            D
          </div>
          <div className="pointer" onClick={() => this.reverseRotateBottom()}>
            Di
          </div>
          <div className="pointer" onClick={this.rotateFront}>
            F
          </div>
          <div className="pointer" onClick={this.reverseRotateFront}>
            Fi
          </div>
          <div className="pointer" onClick={this.rotateBack}>
            B
          </div>
          <div className="pointer" onClick={this.reverseRotateBack}>
            Bi
          </div>
          <div className="pointer" onClick={this.scramble}>
            SCRAMBLE
          </div>
        </div>
      </div>
    );
  }
}

export default Cube;
