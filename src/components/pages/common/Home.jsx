import React from "react";
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
          <CompanyHome />
        </React.Fragment>
      )}
    </div>
  );
}

export default Home;
