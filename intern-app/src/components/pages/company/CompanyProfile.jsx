import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  editCompanyDetails,
  getCompanies,
  getCompanyDetails,
} from "./../../../services/CompanyService";
import {
  getStudents,
  getStudentDetails,
} from "./../../../services/StudentService";
import { getUsers } from "./../../../services/UserService";
import {
  getApplications,
  addNewApplication,
} from "./../../../services/ApplicationService";

function CompanyProfile({ loginUser }) {
  const userType = loginUser.userType;
  const url = window.location.pathname.split("/");
  const viewType = url[2];

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

  const [application, setApplication] = useState({});

  const { id } = useParams();
  useEffect(() => {
    loadCompany();
  }, [loginUser]);

  const loadCompany = async () => {
    if (id === undefined) {
      const loginUseremail = loginUser.email;
      try {
        const usersResult = await getUsers();
        const users = usersResult.data;
        const getUser = users.filter((user) => user.email === loginUseremail);
        const user = getUser[0];

        if (user) {
          const userid = user.id;
          const result = await getCompanies();
          const students = result.data;
          var newresult = students.filter((data) => data.user.id === userid);

          var companyDetails = newresult[0];
          setCompany(companyDetails);
        }
      } catch (err) {
        console.log("Error", err.message);
      }
    }
    if (userType === "Student") {
      try {
        const loginUserEmail = loginUser.email;
        const result = await getStudents();
        const newstudent = result.data.filter(
          (data) => data.user.email === loginUserEmail
        );
        setStudent(newstudent[0]);
      } catch (ex) {
        console.log("Error:", ex.message);
      }
    }
    if (id !== undefined && userType === "Student") {
      try {
        const applications = await getApplications();
        const application = applications.data.filter(
          (data) =>
            data.company.id === parseInt(id) &&
            data.student.user.email === loginUser.email
        );
        if (application) {
          setApplication(application[0]);
        }
      } catch (ex) {
        console.log("Error", ex.message);
      }
    }
    if (id !== undefined) {
      try {
        const result = await getCompanyDetails(id);
        setCompany(result.data);
      } catch (err) {
        console.log("Error", err.message);
      }
    }
  };

  const deleteCompany = async (id) => {
    try {
      await deleteCompany(id);
      await localStorage.removeItem("loginUser");
      window.location = "/";
    } catch (err) {
      console.log("Error", err.message);
    }
  };

  const acceptCompany = async (id) => {
    try {
      const result = await getCompanyDetails(id);
      let newCompany = result.data;
      newCompany.adminAcception = "Accepted";
      await editCompanyDetails(id, newCompany);
      window.location = "/request-companies";
    } catch (ex) {
      console.log("Error", ex.message);
    }
  };

  const declineCompany = async (id) => {
    try {
      const result = await getCompanyDetails(id);
      let newCompany = result.data;
      newCompany.adminAcception = "AdminDeclined";
      await editCompanyDetails(id, newCompany);
      window.location = "/request-companies";
    } catch (ex) {
      console.log("Error", ex.message);
    }
  };

  const applyForCompany = async (id) => {
    let newapplication = {};
    try {
      const companyDetials = await getCompanyDetails(parseInt(id));
      const studentDetails = await getStudentDetails(student.id);
      newapplication.company = companyDetials.data;
      newapplication.student = studentDetails.data;
      newapplication.companyAcception = "NotAccepted";

      await addNewApplication(newapplication);
      window.location = "/";
    } catch (ex) {
      console.log("Error:", ex.message);
    }
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

          {id &&
            userType === "Student" &&
            student.adminAcception === "Accepted" &&
            !application && (
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
