import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AdminProfile({ loginUser }) {
  const [admin, setAdmin] = useState({
    id: "",
    username: "",
    adminName: "",
    email: "",
    contactnumber: "",
    university: "",
  });

  useEffect(() => {
    const loadAdmin = async () => {
      const loginUseremail = loginUser.email;
      const result = await axios.get("http://localhost:3004/campusAdmin");
      const admin = result.data;
      const newresult = admin.filter((data) => data.email === loginUseremail);
      newresult.forEach((data) => {
        setAdmin(data);
      });
    };
    loadAdmin();
  }, [loginUser]);

  return (
    <div className="container  w-50 m-auto">
      <div className="py-4">
        <h1 className="text-center setmargin">Admin Profile</h1>
        <form className="mx-auto">
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Admin Username</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                value={admin.username}
                readOnly
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Admin Name</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                value={admin.adminName}
                readOnly
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Admin Email</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                value={admin.email}
                readOnly
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">
              Admin Contact Number
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                value={admin.contactnumber}
                readOnly
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Admin University</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                value={admin.university}
                readOnly
              />
            </div>
          </div>

          <div className="btn-group mr-2">
            <Link
              className="btn btn-primary"
              to={`/admin-profile/edit/${admin.id}`}
            >
              Edit
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminProfile;
