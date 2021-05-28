import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import passwordHash from "password-hash";
import Session from "react-session-api";

function SignIn({ setLoginUser, loginUser }) {
  let history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const result = await axios.get("http://localhost:3004/users");
    const users = result.data;
    let validUser = false;
    // const loginUser = {};

    users.forEach((person) => {
      if (
        person.email === user.email &&
        passwordHash.verify(user.password, person.password)
      ) {
        validUser = true;
        setLoginUser([
          ...loginUser,
          { email: person.email, userType: person.userType },
        ]);

        // loginUser.email = person.email;
        // loginUser.userType = person.userType;
        // // Create session storage
        // Session.set("loginUser", loginUser);
        // console.log(Session.get("loginUser"));
      }
    });

    // console.log(loginUser);

    if (validUser === true) {
      history.push("/");
    } else {
      setUser((user) => ({
        ...user,
        email: "",
        password: "",
      }));
    }
  };

  const { email, password } = user;

  return (
    <div className="container  w-50 m-auto">
      <div className="py-4">
        <h1 className="text-center setmargin">Login</h1>
        <form className="mx-auto" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Username</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Email Here..."
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
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
