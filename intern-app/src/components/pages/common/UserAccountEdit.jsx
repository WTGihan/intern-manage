import React, { useState, useEffect } from "react";
import passwordHash from "password-hash";
import { editUserDetails, getUsers } from "./../../../services/UserService";

function UserAccountEdit({ loginUser }) {
  const [user, setUser] = useState({
    id: "",
    email: "",
    userType: "",
    newPassword: "",
  });

  useEffect(() => {
    loadUser();
  }, [loginUser]);

  const loadUser = async () => {
    try {
      const result = await getUsers();
      const user = result.data.filter((data) => data.email === loginUser.email);
      if (user[0]) {
        setUser({ ...user[0], newPassword: "" });
      }
    } catch (ex) {
      console.log("Error:", ex.message);
    }
  };

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(user.newPassword);
      let newUser = {};
      newUser.id = user.id;
      newUser.email = user.email;
      newUser.userType = user.userType;
      newUser.password = passwordHash.generate(user.newPassword);
      const loginUser = {
        email: newUser.email,
        userType: newUser.userType,
      };
      await editUserDetails(newUser.id, newUser);
      localStorage.setItem("loginUser", JSON.stringify(loginUser));
      window.location = "/user";
    } catch (ex) {
      console.log("Error:", ex.message);
    }
  };
  //   console.log(user)
  return (
    <div className="container  w-50 m-auto">
      <div className="py-4">
        <h1 className="text-center setmargin">User Edit Profile</h1>
        <form className="mx-auto" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">User Email</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="email"
                value={user.email}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">User New Password</label>
            <div className="col-sm-8">
              <input
                type="password"
                className="form-control"
                placeholder="Enter new Password"
                name="newPassword"
                value={user.newPassword}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>

          <div className="btn-group mr-2">
            <button className="btn btn-primary">Edit User</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserAccountEdit;
