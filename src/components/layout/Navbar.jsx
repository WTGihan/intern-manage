import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <span className="navbar-brand">InternMangement</span>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/companies">
                Companies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/student-profile">
                Student Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/company-profile">
                Company Profile
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="btn-group mr-2">
          <Link className="btn btn-outline-primary" to="/signin">
            Sign In
          </Link>
        </div>
        <div className="btn-group mr-2">
          <Link className="btn btn-outline-primary" to="/signup">
            Sign Up
          </Link>
        </div>
        {/* <div className="btn-group mr-2">
          <Link className="btn btn-outline-primary" to="/">
            Logout
          </Link>
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
