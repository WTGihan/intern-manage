import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function StudentProfile({ loginUser }) {
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

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const loginUseremail = loginUser.email;
    const result = await axios.get("http://localhost:3004/students");
    const students = result.data;
    const newresult = students.filter((data) => data.email === loginUseremail);
    newresult.forEach((data) => {
      setStudent(data);
    });
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
