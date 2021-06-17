import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCampusAdmins } from "./../../../services/CampusAdminService";

function AdminProfile({ loginUser }) {
  const [admin, setAdmin] = useState({
    id: "",
    username: "",
    adminName: "",
    contactnumber: "",
    university: "",
  });

  useEffect(() => {
    loadAdmin();
  }, [loginUser]);

  const loadAdmin = async () => {
    try {
      const loginUseremail = loginUser.email;
      const result = await getCampusAdmins();
      const newresult = result.data.filter(
        (data) => data.user.email === loginUseremail
      );

      if (newresult[0]) {
        setAdmin(newresult[0]);
      }
    } catch (ex) {
      console.log("Error:", ex.message);
    }
  };

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
