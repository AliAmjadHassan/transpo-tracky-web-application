import React, { Component } from "react";
import "./Who.css";
class who extends Component {
  state = {};
  render() {
    return (
      <section id="who">
        <div class="who-img" />
        <div class="who-text bg-dark p-2">
          <h2 class="m-heading">
            <span class="text-primary">Who</span> We Are
          </h2>
          <p>
            A team of well Organized Professionals providing you the best
            services regarding transport management at your door step
          </p>
          <h3>Our Team</h3>
          <ul class="list">
            <li>Asmara Safdar: Supervisor</li>
            <li>Ali Amjad: CEO</li>
            <li>Shahzaib Minhas: Lead Developer</li>
            <li>Abdul Ahad: Lead Accountant</li>
            <li>Minahil Shahzad: HR Manager</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default who;
