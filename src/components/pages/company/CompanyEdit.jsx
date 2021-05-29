import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

function CompanyEdit() {
  let history = useHistory();
  const { id } = useParams();

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

  useEffect(() => {
    loadCompany();
  }, []);

  const loadCompany = async () => {
    const result = await axios.get(`http://localhost:3004/companies/${id}`);
    setCompany(result.data);
  };

  const onInputChange = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3004/companies/${id}`, company);
    history.push("/company-profile");
  };

  return (
    <div className="container  w-50 m-auto">
      <div className="py-4">
        <h1 className="text-center setmargin">Company Edit Profile</h1>
        <form className="mx-auto" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Username</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="username"
                value={company.username}
                onChange={(e) => onInputChange(e)}
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
                name="companyAdminName"
                value={company.companyAdminName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Comapany Email</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="email"
                value={company.email}
                onChange={(e) => onInputChange(e)}
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
                name="contactnumber"
                value={company.contactnumber}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Company</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="company"
                value={company.company}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Technologies</label>
            <div className="col-sm-8">
              <textarea
                className="form-control"
                name="technologies"
                value={company.technologies}
                onChange={(e) => onInputChange(e)}
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
                name="qualificationAndExperience"
                value={company.qualificationAndExperience}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">About Company</label>
            <div className="col-sm-8">
              <textarea
                className="form-control"
                name="aboutCompany"
                value={company.aboutCompany}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>

          <div className="btn-group mr-2">
            <button className="btn btn-primary">Edit Profile</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CompanyEdit;
