import React, { Component } from "react";

export class SideNav extends Component {

  render() {
    return (
      <div>
        <div className="sidebar d-flex flex-column flex-shrink-0 p-2 text-white">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <span className="fs-4">Categories</span>
          </a>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <a href="/read" className="nav-link active" aria-current="page">
                All News
              </a>
            </li>
            <li>
              <a href="/read/national" className="nav-link text-white">
                India
              </a>
            </li>
            <li>
              <a href="/read/business" className="nav-link text-white">
                Business
              </a>
            </li>
            <li>
              <a href="/read/sports" className="nav-link text-white">
                Sports
              </a>
            </li>
            <li>
              <a href="/read/world" className="nav-link text-white">
                World
              </a>
            </li>
            <li>
              <a href="/read/politics" className="nav-link text-white">
                Politics
              </a>
            </li>
            <li>
              <a href="/read/technology" className="nav-link text-white">
                Technology
              </a>
            </li>
            <li>
              <a href="/read/startup" className="nav-link text-white">
                StartUp
              </a>
            </li>
            <li>
              <a href="/read/entertainment" className="nav-link text-white">
                Entertainment
              </a>
            </li>
            <li>
              <a href="/read/science" className="nav-link text-white">
                Science
              </a>
            </li>
            <li>
              <a href="/read/health" className="nav-link text-white">
                Health
              </a>
            </li>
            <li>
              <a href="/read/automobile" className="nav-link text-white">
                Automobile
              </a>
            </li>
          </ul>
          <hr />
        </div>
      </div>
    );
  }
}

export default SideNav;
