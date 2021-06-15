import React, { useState } from "react";
import { addNewCompany } from "../../../services/CompanyService";
import { getUsers } from "./../../../services/UserService";

function CompanyCreate() {
  let result = JSON.parse(localStorage.getItem("loginUser"));
  const email = result.email;

  const [company, setCompany] = useState({
    id: "",
    useremail: email,
    username: "",
    adminAcception: "NotAccepted",
    companyAdminName: "",
    email: "",
    contactnumber: "",
    company: "",
    technologies: "",
    qualificationAndExperience: "",
    aboutCompany: "",
  });

  const onInputChange = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let result = JSON.parse(localStorage.getItem("loginUser"));
    const loginUser = {
      email: result.email,
      userType: result.userType,
    };

    // get user object
    const usersResult = await getUsers();
    const users = usersResult.data;
    const getUser = users.filter((user) => user.email === loginUser.email);
    const user = getUser[0];

    var currentCompany = company;

    const newCompany = { ...currentCompany, user };
    await addNewCompany(newCompany);

    localStorage.setItem("loginUser", JSON.stringify(loginUser));
    window.location = "/";
  };

  return (
    <div className="container  w-50 m-auto">
      <div className="py-4">
        <h1 className="text-center setmargin">Student Profile</h1>
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
                required
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
                required
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
                required
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
                required
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
                required
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
                required
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
                required
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
                required
              />
            </div>
          </div>

          <div className="btn-group mr-2">
            <button className="btn btn-primary">Create Company</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CompanyCreate;
