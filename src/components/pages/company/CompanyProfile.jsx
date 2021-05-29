import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function CompanyProfile({ loginUser }) {
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
  }, [loginUser]);

  const loadCompany = async () => {
    if (id === undefined) {
      const loginUseremail = loginUser.email;
      const result = await axios.get("http://localhost:3004/companies");
      const students = result.data;
      const newresult = students.filter(
        (data) => data.useremail === loginUseremail
      );
      newresult.forEach((data) => {
        setCompany(data);
      });
    } else {
      const result = await axios.get(`http://localhost:3004/companies/${id}`);
      setCompany(result.data);
    }
  };

  const deleteCompany = async (id) => {
    const loginUseremail = loginUser.email;
    await axios.delete(`http://localhost:3004/companies/${id}`);

    const result = await axios.get("http://localhost:3004/users");
    const users = result.data;
    const newresult = users.filter((data) => data.email === loginUseremail);
    let userid = "";

    newresult.forEach((data) => {
      userid = data.id;
    });

    await axios.delete(`http://localhost:3004/users/${userid}`);
    localStorage.removeItem("loginUser");
    window.location = "/";
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
                <Link
                  className="btn btn-primary"
                  to={`/company-profile/edit/${company.id}`}
                >
                  Edit
                </Link>
              </div>
              <div className="btn-group mr-2">
                <Link
                  className="btn btn-danger"
                  to="/"
                  onClick={() => deleteCompany(company.id)}
                >
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
