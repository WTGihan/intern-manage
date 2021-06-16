import React, { useState, useEffect } from "react";
import { getApplications } from "../../../services/ApplicationService";
import { getCompanies } from "../../../services/CompanyService";

function CompanySelectStudent() {
  const [selectStudents, setSelectStudents] = useState({});
  let loginUser = JSON.parse(localStorage.getItem("loginUser"));

  useEffect(() => {
    loadSelectStudents();
  }, []);

  const loadSelectStudents = async () => {
    try {
      const loginUserEmail = loginUser.email;

      //   get company details
      // get company id
      const result = await getCompanies();
      // console.log(result.data);
      const company = result.data.filter(
        (data) => data.user.email === loginUserEmail
      );
      const companyId = company[0].id;

      const applicationsResult = await getApplications();

      const companyApplication = applicationsResult.data.filter(
        (data) => data.company.id === companyId
      );

      let students = [];
      for (var key in companyApplication) {
        let studentResult = companyApplication[key]["student"];
        let selectStudentDetails = {};
        selectStudentDetails.studentName = studentResult.studentName;
        selectStudentDetails.email = studentResult.user.email;
        selectStudentDetails.contactnumber = studentResult.contactnumber;
        selectStudentDetails.status =
          companyApplication[key]["companyAcception"];

        students.push(selectStudentDetails);
      }
      setSelectStudents(students);
    } catch (err) {
      console.log("Error:", err.message);
    }
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1 className="text-center setmargin">StudentApply Companies Page</h1>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Student Name</th>
              <th scope="col">Email</th>
              <th scope="col">Contact Number</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(selectStudents) === true && (
              <React.Fragment>
                {selectStudents.map((student, index) => (
                  <tr key={index + 1}>
                    <th scope="row">{index + 1}</th>
                    <td>{student.studentName}</td>
                    <td>{student.email}</td>
                    <td>{student.contactnumber}</td>
                    <td>
                      {student.status === "Accepted" && (
                        <div className="btn btn-success">{student.status}</div>
                      )}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CompanySelectStudent;
