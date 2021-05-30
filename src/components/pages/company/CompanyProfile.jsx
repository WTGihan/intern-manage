import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function CompanyProfile({ loginUser }) {
  const userType = loginUser.userType;
  const url = window.location.pathname.split("/");
  const viewType = url[2];

  let alreadyApplications = false;

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

  const [student, setStudent] = useState({
    id: "",
    adminAcception: "",
  });

  const [application, setApplication] = useState({
    id: "",
    companyId: "",
    studentId: "",
  });

  const { id } = useParams();
  useEffect(() => {
    loadCompany();
    // loadStudent();
    // loadApplication();
  }, [loginUser]);

  const loadCompany = async () => {
    let studentId = "";
    if (id === undefined) {
      const loginUseremail = loginUser.email;
      const result = await axios.get("http://localhost:3004/companies");
      const allcompanies = result.data;
      const newresult = allcompanies.filter(
        (data) => data.useremail === loginUseremail
      );
      newresult.forEach((data) => {
        setCompany(data);
      });
    }
    if (userType === "Student") {
      const loginUserEmail = loginUser.email;
      const result = await axios.get("http://localhost:3004/students");
      const students = result.data;
      const newstudent = students.filter(
        (data) => data.email === loginUserEmail
      );
      // console.log(newstudent[id]);

      newstudent.forEach((data) => {
        studentId = data.id;
        setStudent(data);
      });
    }
    if (id !== undefined && userType === "Student") {
      // id is equal to company id
      // console.log(id);
      // console.log(studentId);
      // get all application details
      const applications = await axios.get("http://localhost:3004/application");
      const applicationsResult = applications.data;
      applicationsResult.forEach((data) => {
        if (data.companyId == id && data.studentId == studentId) {
          // SET APPLICATIONS DATA
          setApplication(data);
        }
      });
    }
    if (id !== undefined) {
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

  const acceptCompany = async (id) => {
    const result = await axios.get(`http://localhost:3004/companies/${id}`);
    let newCompany = result.data;
    newCompany.adminAcception = "Accepted";
    await axios.put(`http://localhost:3004/companies/${id}`, newCompany);
    window.location = "/request-companies";
  };

  const declineCompany = async (id) => {
    const result = await axios.get(`http://localhost:3004/companies/${id}`);
    let newCompany = result.data;
    newCompany.adminAcception = "AdminDeclined";
    await axios.put(`http://localhost:3004/companies/${id}`, newCompany);
    window.location = "/request-companies";
  };

  const applyForCompany = async (id) => {
    let newapplication = {};
    newapplication.companyId = parseInt(id);
    newapplication.studentId = student.id;
    // console.log(newapplication);
    await axios.post("http://localhost:3004/application", newapplication);
    window.location = "/";
  };

  // console.log(application);

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

          {id &&
            userType === "Student" &&
            student.adminAcception === "Accepted" &&
            !application.id && (
              <React.Fragment>
                <div className="btn-group mr-2">
                  <Link
                    className="btn btn-secondary"
                    onClick={() => applyForCompany(id)}
                    to="/"
                  >
                    Apply For Company
                  </Link>
                </div>
              </React.Fragment>
            )}
          {id && userType === "CampusAdmin" && viewType === "view" && (
            <React.Fragment>
              <div className="btn-group mr-2">
                <Link
                  className="btn btn-primary"
                  onClick={() => acceptCompany(id)}
                  to="/request-companies"
                >
                  Accept
                </Link>
              </div>
              <div className="btn-group mr-2">
                <Link
                  className="btn btn-danger"
                  onClick={() => declineCompany(id)}
                  to="/request-companies"
                >
                  Decline
                </Link>
              </div>
            </React.Fragment>
          )}
          {id && userType === "CampusAdmin" && viewType === "viewonly" && (
            <React.Fragment>
              <div className="btn-group mr-2">
                <Link className="btn btn-primary" to="/companies">
                  Back
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
