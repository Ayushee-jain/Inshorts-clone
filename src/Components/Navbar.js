import React, { Component } from "react";
import logo from '../logo_inshorts.png'

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg" style={{width: "1520px", height:"120px", marginTop: "10px"}}>
          <div>
            <a href="/"><img src={logo} alt="inshorts-logo" width="215" height="93" style={{marginLeft:"230px", marginTop: "-20px", display:"inline-block"}}/></a>

            <a className="main-header" href="/read" target="_blank" style={{marginLeft:"563px"}}>
              Read Now
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
