import React, {useState, useEffect} from "react";
import {getApplications} from "../../../services/ApplicationService";
import {getCompanies} from "../../../services/CompanyService";
import {getStudentDetails} from "../../../services/StudentService";

function CompanySelectStudent() {
    const [selectStudents, setSelectStudents] = useState({});
    let loginUser = JSON.parse(localStorage.getItem("loginUser"));

    useEffect(() => {
        const loadSelectStudents = async () => {
            const loginUserEmail = loginUser.email;

            //   get company details

            const result = await getCompanies();
            const companies = result.data;
            const newResult = companies.filter(
                (data) => data.useremail === loginUserEmail
            );

            let companyID;
            newResult.forEach((data) => {
                companyID = data.id;
            });

            //   console.log(companyID);

            //   Then get all applications data for give company id
            const resultApplication = await getApplications();
            const applications = resultApplication.data;
            const filterApplications = applications.filter(
                (data) => data.companyId === companyID
            );

            console.log(filterApplications);

            let students = [];
            for (var key in filterApplications) {
                let studentResult = await getStudentDetails(
                    filterApplications[key]["studentId"]
                );
                let student = studentResult.data;
                let selectStudentDetails = {};
                selectStudentDetails.studentName = student.studentName;
                selectStudentDetails.email = student.email;
                selectStudentDetails.contactnumber = student.contactnumber;
                selectStudentDetails.status =
                    filterApplications[key]["companyAcception"];

                students.push(selectStudentDetails);
            }
            setSelectStudents(students);
        };
        loadSelectStudents();
    }, []);

    console.log(selectStudents);
    return (
        <div className="container">
            <div className="py-4">
                <h1 className="text-center setmargin">StudentApply Companies Page</h1>
                <table className="table table-striped">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Student Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contact Number</th>
                        <th scope="col">Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Array.isArray(selectStudents) === true && (
                        <React.Fragment>
                            {selectStudents.map((student, index) => (
                                <tr key={index + 1}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{student.studentName}</td>
                                    <td>{student.email}</td>
                                    <td>{student.contactnumber}</td>
                                    <td>
                                        {student.status === "Accepted" && (
                                            <div className="btn btn-success">{student.status}</div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </React.Fragment>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CompanySelectStudent;
