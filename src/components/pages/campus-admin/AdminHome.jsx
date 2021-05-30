import React from "react";
import { Link } from "react-router-dom";

function AdminHome() {
  return (
    <div className="container">
      <div className="py-4">
        <h1 className="text-center setmargin">Admin Home Page</h1>
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Students</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <Link className="btn btn-primary" to="/students">
                  All Students
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Companies</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <Link className="btn btn-primary" to="/companies">
                  All Companies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
