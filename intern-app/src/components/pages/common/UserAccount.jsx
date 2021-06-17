import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "./../../../services/UserService";

function UserAccount({ loginUser }) {
  const [user, setUser] = useState({
    id: "",
    email: "",
    userType: "",
  });

  useEffect(() => {
    loadUser();
  }, [loginUser]);

  const loadUser = async () => {
    try {
      const result = await getUsers();
      const user = result.data.filter((data) => data.email === loginUser.email);
      if (user[0]) {
        setUser(user[0]);
      }
    } catch (ex) {
      console.log("Error:", ex.message);
    }
  };
  return (
    <div className="container  w-50 m-auto">
      <div className="py-4">
        <h1 className="text-center setmargin">User Account</h1>
        <form className="mx-auto">
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">UserType</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                value={user.userType}
                readOnly
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">User Email</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                value={user.email}
                readOnly
              />
            </div>
          </div>
          <div className="btn-group">
            <Link
              className="btn btn-primary"
              to={`/student-profile/edit/${user.id}`}
            >
              Edit Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserAccount;
