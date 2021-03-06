import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
require("../../imgs/footer/statistics.svg");
require("../../imgs/footer/charts.svg");
require("../../imgs/footer/add.svg");
require("../../imgs/footer/user.svg");

class Home extends Component {
  render() {
    return (
      <div>
        <div className="footer">
          <NavLink to="/Statistics" activeClassName="selected">
            <div className="item-wrapper">
              <svg className="index_off">
                <use xlinkHref="#statistics" />
              </svg>
              <div>Main Page</div>
            </div>
          </NavLink>
          <NavLink to="/detailed" activeClassName="selected">
            <div className="item-wrapper">
              <svg className="index_off">
                <use xlinkHref="#charts" />
              </svg>
              <div>Details</div>
            </div>
          </NavLink>
          <NavLink to="/AddingPage" activeClassName="selected">
            <div className="item-wrapper">
              <svg className="index_off">
                <use xlinkHref="#add" />
              </svg>
              <div>Adding</div>
            </div>
          </NavLink>
          <NavLink to="/myself" activeClassName="selected">
            <div className="item-wrapper">
              <svg className="index_off">
                <use xlinkHref="#user" />
              </svg>
              <div>Profile</div>
            </div>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Home;
