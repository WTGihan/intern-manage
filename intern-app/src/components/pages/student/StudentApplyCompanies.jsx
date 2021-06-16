import React, { useState, useEffect } from "react";
import { getStudents } from "./../../../services/StudentService";
import { getApplications } from "./../../../services/ApplicationService";
import { getCompanyDetails } from "./../../../services/CompanyService";

function StudentApplyCompanies() {
  const [applyCompanies, setApplyCompanies] = useState({});
  let loginUser = JSON.parse(localStorage.getItem("loginUser"));

  useEffect(() => {
    loadApplyCompanies();
  }, []);

  const loadApplyCompanies = async () => {
    try {
      const loginUserEmail = loginUser.email;
      const result = await getStudents();
      const students = result.data;
      const newResult = students.filter(
        (data) => data.user.email === loginUserEmail
      );

      let studentID;
      newResult.forEach((data) => {
        studentID = data.id;
      });

      // Then get all aplications data for given student id
      const resultApplication = await getApplications();
      const applications = resultApplication.data;
      const filterApplications = applications.filter(
        (data) => data.student.id === studentID
      );

      //   have to modify

      let companies = [];

      for (var key in filterApplications) {
        let company = filterApplications[key]["company"];

        let companyApplicationDetails = {};
        companyApplicationDetails.companyName = company.company;
        companyApplicationDetails.companyEmail = company.email;
        companyApplicationDetails.companyAdminName = company.companyAdminName;
        companyApplicationDetails.companyContactNumber = company.contactnumber;
        companyApplicationDetails.companyApplicationStatus =
          filterApplications[key]["companyAcception"];
        companies.push(companyApplicationDetails);
      }

      setApplyCompanies(companies);
    } catch (err) {
      console.log("Error", err.message);
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
              <th scope="col">Company Name</th>
              <th scope="col">Company Admin</th>
              <th scope="col">Email</th>
              <th scope="col">Contact Number</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(applyCompanies) === true && (
              <React.Fragment>
                {applyCompanies.map((company, index) => (
                  <tr key={index + 1}>
                    <th scope="row">{index + 1}</th>
                    <td>{company.companyName}</td>
                    <td>{company.companyAdminName}</td>
                    <td>{company.companyEmail}</td>
                    <td>{company.companyContactNumber}</td>
                    <td>
                      {company.companyApplicationStatus === "Rejected" && (
                        <div className="btn btn-danger">
                          {company.companyApplicationStatus}
                        </div>
                      )}
                      {company.companyApplicationStatus === "NotAccepted" && (
                        <div className="btn btn-primary">
                          {company.companyApplicationStatus}
                        </div>
                      )}
                      {company.companyApplicationStatus === "Accepted" && (
                        <div className="btn btn-success">
                          {company.companyApplicationStatus}
                        </div>
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

export default StudentApplyCompanies;
