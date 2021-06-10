import React, {useState, useEffect} from "react";
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";
import {
    editCampusAdminDetails,
    getCampusAdminDetails,
} from "./../../../services/CampusAdminService";

function AdminEdit() {
    let history = useHistory();
    let result = JSON.parse(localStorage.getItem("loginUser"));
    const email = result.email;

    const {id} = useParams();

    const [admin, setAdmin] = useState({
        id: "",
        username: "",
        adminName: "",
        email: email,
        contactnumber: "",
        university: "",
    });

    useEffect(() => {
        const loadAdmin = async () => {
            // const result = await axios.get(`http://localhost:3004/campusAdmin/${id}`);
            const result = await getCampusAdminDetails(id);
            setAdmin(result.data);
        };

        loadAdmin();
    }, []);

    const onInputChange = (e) => {
        setAdmin({...admin, [e.target.name]: e.target.value});
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        // await axios.put(`http://localhost:3004/campusAdmin/${id}`, admin);
        await editCampusAdminDetails(id, admin);
        history.push("/admin-profile");
    };

    return (
        <div className="container  w-50 m-auto">
            <div className="py-4">
                <h1 className="text-center setmargin">Admin Edit Profile</h1>
                <form className="mx-auto" onSubmit={(e) => onSubmit(e)}>
                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Admin Username</label>
                        <div className="col-sm-8">
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                value={admin.username}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Admin Name</label>
                        <div className="col-sm-8">
                            <input
                                type="text"
                                className="form-control"
                                name="adminName"
                                value={admin.adminName}
                                onChange={(e) => onInputChange(e)}
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
                                name="contactnumber"
                                value={admin.contactnumber}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                    </div>

                    <div className="btn-group mr-2">
                        <button className="btn btn-primary">Edit Admin</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AdminEdit;
