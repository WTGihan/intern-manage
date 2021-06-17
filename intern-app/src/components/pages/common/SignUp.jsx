import React, { useState } from "react";
import passwordHash from "password-hash";
import { addNewUser } from "../../../services/UserService";
import StudentEdit from "./../student/StudentEdit";

function SignUp() {
  const [newuser, createUser] = useState({
    userType: "Select User Type",
    email: "",
    password: "",
  });

  const onInputChange = (e) => {
    createUser({ ...newuser, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    let result = [];

    result = { ...newuser };
    result["password"] = passwordHash.generate(result["password"]);

    const loginUser = {
      email: result.email,
      userType: result.userType,
      status: "new",
    };

    try {
      await addNewUser(result);
      localStorage.setItem("loginUser", JSON.stringify(loginUser));
      if (result.userType === "Student") {
        window.location = "/student-create";
      }
      if (result.userType === "Company") {
        window.location = "/company-create";
      }
    } catch (ex) {
      console.log("Error:", ex.message);
      createUser((user) => ({
        ...user,
        email: "",
        password: "",
        userType: "Select User Type",
      }));
      // window.location = "/signup";
    }
  };

  const { userType, email, password } = newuser;

  return (
    <div className="container  w-50 m-auto">
      <div className="py-4">
        <h1 className="text-center setmargin">Create New User</h1>
        <form className="mx-auto" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">User Type</label>
            <div className="col-sm-8">
              <select
                className="form-control"
                name="userType"
                onChange={(e) => onInputChange(e)}
                required
              >
                <option value={userType}>{userType}</option>
                <option value="Student">Student</option>
                <option value="Company">Company</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Username</label>
            <div className="col-sm-8">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email Here.."
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Password</label>
            <div className="col-sm-8">
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password Here..."
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
