import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCompanies } from "./../../../services/CompanyService";
import { getApplications } from "./../../../services/ApplicationService";

function CompanyHome({ loginUser }) {
  const [company, setCompany] = useState({
    id: "",
    adminAcception: "",
  });

  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadCompany();
  }, [loginUser]);

  const loadCompany = async () => {
    try {
      const loginUserEmail = loginUser.email;
      const result = await getCompanies();
      const allCompanies = result.data;
      const newResult = allCompanies.filter(
        (data) => data.user.email === loginUserEmail
      );

      let id = "";
      let adminAcception = "";
      newResult.forEach((data) => {
        id = data.id;
        adminAcception = data.adminAcception;
        setCompany(data);
      });

      if (adminAcception === "Accepted") {
        const resultStudent = await getApplications();
        const filterApplications = resultStudent.data.filter(
          (data) => data.company.id === id
        );

        if (filterApplications.length > 0) {
          let allApplyStudents = [];
          for (var key in filterApplications) {
            let student = filterApplications[key]["student"];
            if (student.adminAcception === "Accepted") {
              allApplyStudents.push(student);
            }
          }
          setStudents(allApplyStudents);
        }
      }
    } catch (err) {
      console.log("Error:", err.message);
    }
  };
  return (
    <div className="container">
      <div className="py-4">
        <h1 className="text-center setmargin">Company Home Page</h1>
        {company.adminAcception === "NotAccepted" && (
          <React.Fragment>
            <h2 className="text-center setmargin">Your Company Not Accepted</h2>
          </React.Fragment>
        )}
        {company.adminAcception === "Accepted" && (
          <React.Fragment>
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
                    <td>{student.user.email}</td>
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
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default CompanyHome;
