import React, { Component } from "react";
import "./What.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class what extends Component {
  state = {};
  render() {
    return (
      <section id="what" class="bg-light py-3">
        <div class="container">
          <h2 id="serve" class="m-heading text-center">
            <span class="text-primary">What</span> We Serve
          </h2>
          <div class="items">
            <div class="item">
              <div>
                <h3>Live Tracking</h3>
                <p>
                  TranspoTracky offers live tracking of your vehicles so that
                  you know where your bus exactly is{" "}
                </p>
              </div>
            </div>
            <div class="item">
              <div>
                <h3>Mobile App</h3>
                <p>
                  Mobile App for the Passengers and Drivers so that they can
                  keep track on the GO!
                </p>
              </div>
            </div>
            <div class="item">
              <div>
                <h3>Admin Panel</h3>
                <p>
                  A sophisticated Admin Panel for Admins to keep track of their
                  Employees, Buses and Passengers!!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default what;
