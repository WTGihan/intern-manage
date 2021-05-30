import React from "react";
import AdminHome from "../campus-admin/AdminHome";
import CompanyHome from "../company/CompanyHome";
import StudentHome from "../student/StudentHome";

function Home({ loginUser }) {
  const userType = loginUser.userType;
  return (
    <div>
      {userType === "Student" && (
        <React.Fragment>
          <StudentHome />
        </React.Fragment>
      )}
      {userType === "Company" && (
        <React.Fragment>
          <CompanyHome loginUser={loginUser} />
        </React.Fragment>
      )}
      {userType === "CampusAdmin" && (
        <React.Fragment>
          <AdminHome />
        </React.Fragment>
      )}
    </div>
  );
}

export default Home;
