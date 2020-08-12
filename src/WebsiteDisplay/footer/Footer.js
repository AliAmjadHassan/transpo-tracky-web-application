import React, { Component } from "react";
import "./Footer.css";

class footer extends Component {
  state = {};
  render() {
    return (
      <footer id="main-footer" class="bg-dark">
      <React.Fragment>
        <span><a href="#">Transpo Tracky </a> &copy; 2020</span>
        <span className="ml-auto">Powered by <a href="#">Transpo Tracky</a></span>
      </React.Fragment>
    </footer>
    );
  }
}

export default footer;
