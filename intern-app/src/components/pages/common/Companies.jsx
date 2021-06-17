import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCompanies } from "./../../../services/CompanyService";

function Companies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    loadCompanies();
  }, []);

  const loadCompanies = async () => {
    try {
      const result = await getCompanies();
      setCompanies(
        result.data.filter((company) => company.adminAcception === "Accepted")
      );
    } catch (ex) {
      console.log("Error:", ex.message);
    }
  };
  return (
    <div className="container">
      <div className="py-4">
        <h1 className="text-center setmargin">All Companies</h1>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Company Name</th>
              <th scope="col">Company Admin</th>
              <th scope="col">Email</th>
              <th scope="col">Contact Number</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company, index) => (
              <tr key={index + 1}>
                <th scope="row">{index + 1}</th>
                <td>{company.company}</td>
                <td>{company.companyAdminName}</td>
                <td>{company.user.email}</td>
                <td>{company.contactnumber}</td>
                <td>
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/company/viewonly/${company.id}`}
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

export default Companies;
