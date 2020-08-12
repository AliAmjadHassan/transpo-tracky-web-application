import React, { Component } from "react";
import "./Services.css";

class services extends Component {
  state = {};
  render() {
    return (
      <section id="clients" class="py-1">
      <div class="container">
        <h2 id="service" class="service m-heading text-center">
          <span class="text-primary">Our</span> Services
        </h2>
        <div class="items py-1">
          <div><img src={require("./free.png")} alt="Client"/></div>
          <div><img src={require("./fast.png")} alt="Client"/></div>
          <div><img src={require("./dine-around-favicon.png")} alt="Client"/></div>
        </div>
      </div>
    </section>
    );
  }
}

export default services;
