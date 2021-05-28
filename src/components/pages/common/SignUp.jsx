import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import passwordHash from "password-hash";

function SignUp() {
  // Email must be unique
  let history = useHistory();
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

    localStorage.setItem("loginUser", JSON.stringify(loginUser));

    await axios.post("http://localhost:3004/users", result);
    if (result.userType === "Student") {
      window.location = "/student-create";
    }
    if (result.userType === "Company") {
      window.location = "/company-create";
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
                <option value="CampusAdmin">Campus Admin</option>
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
