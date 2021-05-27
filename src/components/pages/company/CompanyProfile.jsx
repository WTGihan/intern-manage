import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function CompanyProfile() {
  const [company, setCompany] = useState({
    username: "",
    adminAcception: "",
    companyAdminName: "",
    email: "",
    contactnumber: "",
    company: "",
    technologies: "",
    qualificationAndExperience: "",
    aboutCompany: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadCompany();
  }, []);

  const loadCompany = async () => {
    const result = await axios.get(`http://localhost:3004/companies/${id}`);
    setCompany(result.data);
  };

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
                value={company.username}
                readOnly
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
                value={company.adminAcception}
                readOnly
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
                value={company.companyAdminName}
                readOnly
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Comapany Email</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                value={company.email}
                readOnly
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
                value={company.contactnumber}
                readOnly
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Company</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                value={company.company}
                readOnly
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Technologies</label>
            <div className="col-sm-8">
              <textarea
                className="form-control"
                value={company.technologies}
                readOnly
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
                value={company.qualificationAndExperience}
                readOnly
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">About Company</label>
            <div className="col-sm-8">
              <textarea
                className="form-control"
                value={company.aboutCompany}
                readOnly
              />
            </div>
          </div>

          {id && (
            <React.Fragment>
              <div className="btn-group mr-2">
                <Link className="btn btn-secondary" to="/company-profile">
                  Apply For Company
                </Link>
              </div>
            </React.Fragment>
          )}
          {!id && (
            <React.Fragment>
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
            </React.Fragment>
          )}
        </form>
      </div>
    </div>
  );
}

export default CompanyProfile;
