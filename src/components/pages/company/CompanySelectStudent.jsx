import React from "react";

function CompanySelectStudent() {
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
            {/* {Array.isArray(applyCompanies) === true && (
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
            )} */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CompanySelectStudent;
