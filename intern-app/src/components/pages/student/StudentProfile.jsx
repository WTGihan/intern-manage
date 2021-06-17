import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getStudentDetails,
  getStudents,
  deleteStudent,
  editStudentDetails,
} from "./../../../services/StudentService";
import {
  getApplications,
  getApplicationDetails,
  deleteApplication,
  editApplicationDetails,
} from "./../../../services/ApplicationService";
import { getCompanies } from "./../../../services/CompanyService";
import { getUsers } from "./../../../services/UserService";

function StudentProfile({ loginUser }) {
  const userType = loginUser.userType;
  const url = window.location.pathname.split("/");
  const viewType = url[2];

  const [student, setStudent] = useState({
    id: "",
    username: "",
    adminAcception: "",
    studentName: "",
    email: "",
    contactnumber: "",
    university: "",
    languageSkill: "",
    softSkill: "",
    projects: "",
  });

  const [applicationStatus, setApplicationStatus] = useState({
    companyAcception: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadStudents();
  }, [loginUser]);

  const loadStudents = async () => {
    if (id === undefined) {
      try {
        const loginUseremail = loginUser.email;
        const usersResult = await getUsers();
        const users = usersResult.data;
        const getUser = users.filter((user) => user.email === loginUseremail);
        const user = getUser[0];

        if (user) {
          const userid = user.id;
          const result = await getStudents();
          const students = result.data;
          var newresult = students.filter((data) => data.user.id === userid);

          var studentDetails = newresult[0];
          setStudent({ ...studentDetails, email: studentDetails.user.email });
        }
      } catch (err) {
        console.log("Error", err.message);
      }
    } else {
      try {
        const result = await getStudentDetails(id);
        setStudent({ ...result.data, email: result.data.user.email });
        if (userType === "Company" && viewType === "viewonly") {
          const applications = await getApplications();
          const applicationStudentAndCompany = applications.data.filter(
            (data) =>
              data.company.user.email === loginUser.email &&
              data.student.id === parseInt(id)
          );

          setApplicationStatus(
            applicationStudentAndCompany[0].companyAcception
          );
        }
      } catch (err) {
        console.log("Error", err.message);
      }
    }
  };

  const deleteStudentProfile = async (id) => {
    try {
      await deleteStudent(id);
      localStorage.removeItem("loginUser");
      window.location = "/";
    } catch (err) {
      console.log("Error", err.message);
    }
  };

  const acceptStudent = async (id) => {
    try {
      const result = await getStudentDetails(id);
      let newStudent = result.data;
      newStudent.adminAcception = "Accepted";
      await editStudentDetails(id, newStudent);
      window.location = "/request-students";
    } catch (ex) {
      console.log("Error", ex.message);
    }
  };

  const declineStudent = async (id) => {
    try {
      const result = await getStudentDetails(id);
      let newStudent = result.data;
      newStudent.adminAcception = "AdminDeclined";
      await editStudentDetails(id, newStudent);
      window.location = "/request-students";
    } catch (ex) {
      console.log("Error", ex.message);
    }
  };

  const acceptStudentByCompany = async (id) => {
    try {
      const applications = await getApplications();
      let application = applications.data.filter(
        (data) =>
          data.student.id === parseInt(id) &&
          data.company.user.email === loginUser.email
      );
      if (application) {
        application[0].companyAcception = "Accepted";
      }
      await editApplicationDetails(application[0].id, application[0]);

      window.location = "/";
    } catch (ex) {
      console.log("Error:", ex.message);
    }
  };

  const declineStudentByCompany = async (id) => {
    try {
      const applications = await getApplications();
      let application = applications.data.filter(
        (data) =>
          data.student.id === parseInt(id) &&
          data.company.user.email === loginUser.email
      );
      if (application) {
        application[0].companyAcception = "Rejected";
      }
      await editApplicationDetails(application[0].id, application[0]);

      window.location = "/";
    } catch (ex) {
      console.log("Error:", ex.message);
    }
  };

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
                value={student.username}
                readOnly
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Admin Acception</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                value={student.adminAcception}
                readOnly
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Student Name</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                value={student.studentName}
                readOnly
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Student Email</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                value={student.email}
                readOnly
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Contact Number</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                value={student.contactnumber}
                readOnly
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">University</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                value={student.university}
                readOnly
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Language Skill</label>
            <div className="col-sm-8">
              <textarea
                className="form-control"
                value={student.languageSkill}
                readOnly
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Soft Skill</label>
            <div className="col-sm-8">
              <textarea
                className="form-control"
                value={student.softSkill}
                readOnly
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Project(s)</label>
            <div className="col-sm-8">
              <textarea
                className="form-control"
                value={student.projects}
                readOnly
              />
            </div>
          </div>
          {id && userType === "CampusAdmin" && viewType === "view" && (
            <React.Fragment>
              <div className="btn-group mr-2">
                <Link
                  className="btn btn-primary"
                  onClick={() => acceptStudent(id)}
                  to="/request-students"
                >
                  Accept
                </Link>
              </div>
              <div className="btn-group mr-2">
                <Link
                  className="btn btn-danger"
                  onClick={() => declineStudent(id)}
                  to="/request-students"
                >
                  Decline
                </Link>
              </div>
            </React.Fragment>
          )}
          {id && userType === "CampusAdmin" && viewType === "viewonly" && (
            <React.Fragment>
              <div className="btn-group mr-2">
                <Link className="btn btn-primary" to="/students">
                  Back
                </Link>
              </div>
            </React.Fragment>
          )}
          {id &&
            userType === "Company" &&
            viewType === "viewonly" &&
            applicationStatus !== "Accepted" &&
            applicationStatus !== "Rejected" && (
              <React.Fragment>
                <div className="btn-group mr-2">
                  <Link
                    className="btn btn-primary"
                    onClick={() => acceptStudentByCompany(id)}
                    to="/"
                  >
                    Select Student
                  </Link>
                </div>
                <div className="btn-group mr-2">
                  <Link
                    className="btn btn-danger"
                    onClick={() => declineStudentByCompany(id)}
                    to="/"
                  >
                    Reject Student
                  </Link>
                </div>
              </React.Fragment>
            )}

          {!id && (
            <React.Fragment>
              <div className="btn-group mr-2">
                <Link
                  className="btn btn-primary"
                  to={`/student-profile/edit/${student.id}`}
                >
                  Edit
                </Link>
              </div>
              <div className="btn-group mr-2">
                <Link
                  className="btn btn-danger"
                  to="/"
                  onClick={() => deleteStudentProfile(student.id)}
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

export default StudentProfile;
