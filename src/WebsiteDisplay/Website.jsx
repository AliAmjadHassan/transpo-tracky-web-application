import React, { Component } from "react";

import Showcase from "./Showcase/Showcase";
import What from "./What/What";
import Who from "./Who/Who";
import Services from "./Services/Services";
import Footer from "./footer/Footer.js";
import Navbar from "./Navbar/Navbar";
class homepage extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <Showcase />
        <What />
        <Who />
        {/* <Services /> */}
        <Footer />
      </div>
    );
  }
}

export default homepage;
