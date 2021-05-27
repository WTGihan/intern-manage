import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function SignIn() {
  let history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onInputChange = (e) => {
    // console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log(user);
    const result = await axios.get("http://localhost:3004/users");
    const users = result.data;
    let validUser = false;

    users.forEach((person) => {
      if (person.email === user.email && person.password === user.password) {
        validUser = true;
      }
    });
    // console.log(validUser);
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
  // console.log(user);

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
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
