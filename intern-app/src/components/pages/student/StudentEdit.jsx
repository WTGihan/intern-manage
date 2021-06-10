import React, {useState, useEffect} from "react";
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";
import {
    getStudentDetails,
    editStudentDetails,
} from "../../../services/StudentService";

function StudentEdit() {
    let history = useHistory();
    let result = JSON.parse(localStorage.getItem("loginUser"));
    const email = result.email;

    const {id} = useParams();

    const [student, setStudent] = useState({
        id: "",
        username: "",
        studentName: "",
        email: email,
        contactnumber: "",
        university: "",
        languageSkill: "",
        softSkill: "",
        projects: "",
    });

    useEffect(() => {
        const loadStudent = async () => {
            // const result = await axios.get(`http://localhost:3004/students/${id}`);
            const result = await getStudentDetails(id);
            setStudent(result.data);
        };
        loadStudent();
    }, []);

    const onInputChange = (e) => {
        setStudent({...student, [e.target.name]: e.target.value});
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        // await axios.put(`http://localhost:3004/students/${id}`, student);
        await editStudentDetails(id, student);
        history.push("/student-profile");
    };

    return (
        <div className="container  w-50 m-auto">
            <div className="py-4">
                <h1 className="text-center setmargin">Student Profile</h1>
                <form className="mx-auto" onSubmit={(e) => onSubmit(e)}>
                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Username</label>
                        <div className="col-sm-8">
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                value={student.username}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Student Name</label>
                        <div className="col-sm-8">
                            <input
                                type="text"
                                className="form-control"
                                name="studentName"
                                value={student.studentName}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Contact Number</label>
                        <div className="col-sm-8">
                            <input
                                type="text"
                                className="form-control"
                                name="contactnumber"
                                value={student.contactnumber}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">University</label>
                        <div className="col-sm-8">
                            <input
                                type="text"
                                className="form-control"
                                name="university"
                                value={student.university}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Language Skill</label>
                        <div className="col-sm-8">
              <textarea
                  className="form-control"
                  name="languageSkill"
                  value={student.languageSkill}
                  onChange={(e) => onInputChange(e)}
              />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Soft Skill</label>
                        <div className="col-sm-8">
              <textarea
                  className="form-control"
                  name="softSkill"
                  value={student.softSkill}
                  onChange={(e) => onInputChange(e)}
              />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Project(s)</label>
                        <div className="col-sm-8">
              <textarea
                  className="form-control"
                  name="projects"
                  value={student.projects}
                  onChange={(e) => onInputChange(e)}
              />
                        </div>
                    </div>

                    <div className="btn-group mr-2">
                        <button className="btn btn-primary">Edit Student</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default StudentEdit;
