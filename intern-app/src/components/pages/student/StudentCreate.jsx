import React, { useState } from "react";
import { addNewStudent } from "../../../services/StudentService";
import { getUsers } from "../../../services/UserService";

function StudentCreate() {
  let result = JSON.parse(localStorage.getItem("loginUser"));
  const email = result.email;

  const [student, setStudent] = useState({
    id: "",
    username: "",
    adminAcception: "NotAccepted",
    studentName: "",
    email: email,
    contactnumber: "",
    university: "",
    languageSkill: "",
    softSkill: "",
    projects: "",
  });

  const onInputChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    let result = JSON.parse(localStorage.getItem("loginUser"));
    const loginUser = {
      email: result.email,
      userType: result.userType,
    };

    try {
      const usersResult = await getUsers();
      const users = usersResult.data;
      const getUser = users.filter((user) => user.email === loginUser.email);
      const user = getUser[0];

      var currentStudent = student;

      const newStudent = { ...currentStudent, user };

      await addNewStudent(newStudent);

      localStorage.setItem("loginUser", JSON.stringify(loginUser));
      window.location = "/";
    } catch (err) {
      console.log("Error", err.message);
    }
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
                value={student.username}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Student Name</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="studentName"
                value={student.studentName}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Contact Number</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="contactnumber"
                value={student.contactnumber}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">University</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="university"
                value={student.university}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Language Skill</label>
            <div className="col-sm-8">
              <textarea
                className="form-control"
                name="languageSkill"
                value={student.languageSkill}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Soft Skill</label>
            <div className="col-sm-8">
              <textarea
                className="form-control"
                name="softSkill"
                value={student.softSkill}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Project(s)</label>
            <div className="col-sm-8">
              <textarea
                className="form-control"
                name="projects"
                value={student.projects}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>

          <div className="btn-group mr-2">
            <button className="btn btn-primary">Create Student</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StudentCreate;
