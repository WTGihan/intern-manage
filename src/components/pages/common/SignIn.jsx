import React from "react";

function SignIn() {
  return (
    <div className="container  w-50 m-auto">
      <div className="py-4">
        <h1 className="text-center setmargin">Login</h1>
        <form className="mx-auto">
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Username</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Username"
                name="name"
                // value={name}
                // onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Password</label>
            <div className="col-sm-8">
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                name="username"
                // value={username}
                // onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            // onClick={(e) => onSubmit(e)}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
