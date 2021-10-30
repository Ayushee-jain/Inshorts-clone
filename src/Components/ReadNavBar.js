import React, { Component } from "react";
import { SideNav } from "./SideNav";
import logo from "../logo_inshorts.png";

export class ReadNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideNav: false,
    };
  }
  handleMenuClick = () => {
    this.setState({
      sideNav: true,
    });
  };
  handleCloseClick = () => {
    this.setState({
      sideNav: false,
    });
  };
  render() {
    return (
      <div className="d-flex">
        <nav className="navbar fixed-top header shadow p-0">
          {!this.state.sideNav && (
            <div>
            <div
              className="d-flex"
              style={{ cursor: "pointer" }}
              onClick={this.handleMenuClick}
            >
              <i
                className="fa fa-bars"
                style={{
                  fontSize: "26px",
                  marginLeft: "26px",
                  fontWeight: "20",
                }}
              ></i>
              <span style={{ margin: "-14px 5px" }}>Menu</span>
            </div>
            <div className="d-flex">
            <a href="/"><img src={logo} alt="inshorts" width="148" height="73" className="logo-inshorts"/></a>
            </div>
            </div>
          )}
          {this.state.sideNav && (
            <div>
            <div
              className="d-flex"
              onClick={this.handleCloseClick}
              style={{ cursor: "pointer" }}
            >
              <i
                className="fa fa-close"
                style={{ fontSize: "26px", marginLeft: "244px" }}
              ></i>
              <span style={{ margin: "-14px 5px" }}>Close</span>
            </div>
            <div className="d-flex">
            <a href="/"><img src={logo} alt="inshorts" width="148" height="73" className="logo-inshorts"/></a>
          </div>
          </div>
          )}
        </nav>
        {this.state.sideNav && <SideNav/>}
      </div>
    );
  }
}

export default ReadNavBar;
