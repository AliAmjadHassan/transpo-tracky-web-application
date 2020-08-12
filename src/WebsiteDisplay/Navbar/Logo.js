import React, { Component } from "react";
import { Media } from "reactstrap";
class logo extends Component {
  state = {};
  render() {
    return (
      <h1 className="logo">
        <span
          style={{
            color: "#659759",
            marginLeft:'50px'
          }}
        >
          Transpo{" "}
        </span>
        Tracky
      </h1>
    );
  }
}

export default logo;
