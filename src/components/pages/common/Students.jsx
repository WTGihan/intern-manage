import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { getStudents } from "./../../../services/StudentService";

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    // const result = await axios.get("http://localhost:3004/students");
    const result = await getStudents();
    setStudents(
      result.data.filter((student) => student.adminAcception === "Accepted")
    );
    let loginResult = JSON.parse(localStorage.getItem("loginUser"));
    const loginUser = {
      email: loginResult.email,
      userType: loginResult.userType,
      view: "viewOnly",
    };
    localStorage.setItem("loginUser", JSON.stringify(loginUser));
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1 className="text-center setmargin">All Students</h1>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Student Username</th>
              <th scope="col">Student Name</th>
              <th scope="col">Email</th>
              <th scope="col">Contact Number</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index + 1}>
                <th scope="row">{index + 1}</th>
                <td>{student.username}</td>
                <td>{student.studentName}</td>
                <td>{student.email}</td>
                <td>{student.contactnumber}</td>
                <td>
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/student/viewonly/${student.id}`}
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Students;
