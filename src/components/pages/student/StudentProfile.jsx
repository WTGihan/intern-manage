import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function StudentProfile({ loginUser }) {
  const userType = loginUser.userType;
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

  const { id } = useParams();

  useEffect(() => {
    const loadStudents = async () => {
      if (id === undefined) {
        const loginUseremail = loginUser.email;
        const result = await axios.get("http://localhost:3004/students");
        const students = result.data;
        const newresult = students.filter(
          (data) => data.email === loginUseremail
        );
        newresult.forEach((data) => {
          setStudent(data);
        });
      } else {
        const result = await axios.get(`http://localhost:3004/students/${id}`);
        setStudent(result.data);
      }
    };
    loadStudents();
  }, [loginUser]);

  const deleteStudent = async (id) => {
    const loginUseremail = loginUser.email;
    await axios.delete(`http://localhost:3004/students/${id}`);
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

  const acceptStudent = async (id) => {
    const result = await axios.get(`http://localhost:3004/students/${id}`);
    let newStudent = result.data;
    newStudent.adminAcception = "Accepted";
    await axios.put(`http://localhost:3004/students/${id}`, newStudent);
    window.location = "/request-students";
  };

  const declineStudent = async (id) => {
    const result = await axios.get(`http://localhost:3004/students/${id}`);
    let newStudent = result.data;
    newStudent.adminAcception = "AdminDeclined";
    await axios.put(`http://localhost:3004/students/${id}`, newStudent);
    window.location = "/request-students";
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
            <label className="col-sm-4 col-form-label">Email</label>
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
          {id && userType === "CampusAdmin" && (
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
                  onClick={() => deleteStudent(student.id)}
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
