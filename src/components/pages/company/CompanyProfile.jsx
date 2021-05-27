import React from "react";
import { Link } from "react-router-dom";

function CompanyProfile() {
  return (
    <div className="container  w-50 m-auto">
      <div className="py-4">
        <h1 className="text-center setmargin">Company Profile</h1>
        <form className="mx-auto">
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Username</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                // placeholder="Enter Username"
                name="name"
                value="WolfXCode"
                readOnly
                // onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">
              Campus Admin Acception
            </label>
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
            <label className="col-sm-4 col-form-label">
              Company Admin Name
            </label>
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
            <label className="col-sm-4 col-form-label">Comapany Email</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Username"
                name="name"
                value="wolfxcodedevelop@gmail.com"
                readOnly
                // value={name}
                // onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">
              Companay Contact Number
            </label>
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
            <label className="col-sm-4 col-form-label">Company</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Password"
                name="username"
                value="WolfXCode Lab"
                readOnly
                // value={username}
                // onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Technologies</label>
            <div className="col-sm-8">
              <textarea
                className="form-control"
                placeholder="Required example textarea"
                name="username"
                value=" 1. Reactjs
                        2. Node.js
                        3. Java"
                readOnly
                // required
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">
              Qualification and Experience
            </label>
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
            <label className="col-sm-4 col-form-label">About Company</label>
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
            <Link className="btn btn-secondary" to="/company-profile">
              Apply
            </Link>
          </div>
          <div className="btn-group mr-2">
            <Link className="btn btn-primary" to="/company-profile/edit">
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

export default CompanyProfile;
