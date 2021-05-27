import React from "react";
import { Link } from "react-router-dom";

function StudentProfile() {
  return (
    <div className="container  w-50 m-auto">
      <div className="py-4">
        <h1 className="text-center setmargin">Student Profile</h1>
        <form className="mx-auto">
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Username</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                // placeholder="Enter Username"
                name="name"
                value="WTGihan"
                readOnly
                // onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Admin Acception</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                // placeholder="Enter Username"
                name="name"
                value="NotAccepted"
                readOnly
                // onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Student Name</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Username"
                name="name"
                value="Tharindu Gihan"
                readOnly
                // onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Email</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Username"
                name="name"
                value="wtgihan@gmail.com"
                readOnly
                // value={name}
                // onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Contact Number</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Password"
                name="username"
                value="0778522736"
                readOnly
                // value={username}
                // onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">University</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Password"
                name="username"
                value="University of Colombo School of Computing"
                readOnly
                // value={username}
                // onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Language Skill</label>
            <div className="col-sm-8">
              <textarea
                className="form-control"
                placeholder="Required example textarea"
                name="username"
                value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ab."
                readOnly
                // required
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Soft Skill</label>
            <div className="col-sm-8">
              <textarea
                className="form-control"
                placeholder="Required example textarea"
                name="username"
                value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ab."
                readOnly
                // required
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Project(s)</label>
            <div className="col-sm-8">
              <textarea
                className="form-control"
                placeholder="Required example textarea"
                name="username"
                value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ab."
                readOnly
                // required
              />
            </div>
          </div>

          <div className="btn-group mr-2">
            <Link className="btn btn-secondary" to="/student-profile">
              Apply
            </Link>
          </div>
          <div className="btn-group mr-2">
            <Link className="btn btn-primary" to="/student-profile/edit">
              Edit
            </Link>
          </div>
          <div className="btn-group mr-2">
            <Link className="btn btn-danger" to="/">
              Delete
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StudentProfile;
