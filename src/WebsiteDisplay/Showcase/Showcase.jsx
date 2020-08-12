import React, { Component } from "react";
import './Showcase.css';
class showcase extends Component {
  state = {};
  render() {
    return (
      <header id="showcase">
        <div class="showcase-content">
          <h1 style={{fontSize:'75px'}} class="l-heading">
            <span class="text-primary">Transpo   </span>
           Tracky
          </h1>
          <p style={{fontSize:'20px'}}>A Conveyance with Convenience</p>
         
        </div>
      </header>
    );
  }
}

export default showcase;
