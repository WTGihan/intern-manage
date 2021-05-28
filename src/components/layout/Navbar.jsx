import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar({ loginUser }) {
  const email = loginUser.email;
  const userType = loginUser.userType;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <span className="navbar-brand">InternMangement</span>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            {userType === "Student" && (
              <React.Fragment>
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/student-profile">
                    Student Profile
                  </NavLink>
                </li>
              </React.Fragment>
            )}
            {userType === "Company" && (
              <React.Fragment>
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/company-profile">
                    Company Profile
                  </NavLink>
                </li>
              </React.Fragment>
            )}
            {userType === "CampusAdmin" && (
              <React.Fragment>
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/companies">
                    Companies
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/companies">
                    Students
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/admin-profile">
                    Admin Profile
                  </NavLink>
                </li>
              </React.Fragment>
            )}
            {(userType === "" || typeof userType === undefined) && (
              <React.Fragment>
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/companies">
                    Companies
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/companies">
                    Students
                  </NavLink>
                </li>
              </React.Fragment>
            )}

            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
        {email !== "" && email !== undefined && (
          <React.Fragment>
            <div className="btn-group mr-2">
              <Link className="btn btn-outline-primary" to="/logout">
                Logout
              </Link>
            </div>
          </React.Fragment>
        )}
        {(email === "" || email === undefined) && (
          <React.Fragment>
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
          </React.Fragment>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
