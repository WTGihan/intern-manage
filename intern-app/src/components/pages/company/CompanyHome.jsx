import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {getCompanies} from "./../../../services/CompanyService";
import {
    getApplications,
    getApplicationDetails,
} from "./../../../services/ApplicationService";

function CompanyHome({loginUser}) {
    const [company, setCompany] = useState({
        id: "",
        adminAcception: "",
    });

    const [students, setStudents] = useState([]);

    useEffect(() => {
        loadCompany();
    }, [loginUser]);

    const loadCompany = async () => {
        const loginUserEmail = loginUser.email;
        // const result = await axios.get("http://localhost:3004/companies");
        const result = await getCompanies();
        const allCompanies = result.data;
        const newResult = allCompanies.filter(
            (data) => data.useremail === loginUserEmail
        );
        let id = "";
        let adminAcception = "";
        newResult.forEach((data) => {
            id = data.id;
            adminAcception = data.adminAcception;
            setCompany(data);
        });

        // console.log(adminAcception);

        if (adminAcception === "Accepted") {
            // load applied students
            // const resultStudent = await axios.get(
            //   "http://localhost:3004/application"
            // );
            const resultStudent = await getApplications();
            // console.log("hello");
            const applyStudentResult = resultStudent.data;

            let applicationArray = [];
            let i = 0;
            applyStudentResult.forEach((data) => {
                if (data.companyId === id) {
                    applicationArray[i] = data.studentId;
                    i++;
                }
            });

            console.log(applicationArray.length);

            // get students

            if (applicationArray.length > 0) {
                let allApplyStudents = [];
                for (let j = 0; j < applicationArray.length; j++) {
                    // console.log(applicationArray[i]);
                    // const result = await axios.get(
                    //   `http://localhost:3004/students/${applicationArray[j]}`
                    // );
                    const result = await getApplicationDetails(applicationArray[j]);
                    const applystudent = result.data;
                    if (applystudent.adminAcception === "Accepted") {
                        allApplyStudents = allApplyStudents.concat(applystudent);
                    }
                }
                // console.log(allApplyStudents);
                setStudents(allApplyStudents);
            }
        }
    };
    // console.log(company.adminAcception);
    return (
        <div className="container">
            <div className="py-4">
                <h1 className="text-center setmargin">Company Home Page</h1>
                {company.adminAcception === "NotAccepted" && (
                    <React.Fragment>
                        <h2 className="text-center setmargin">Your Company Not Accepted</h2>
                    </React.Fragment>
                )}
                {company.adminAcception === "Accepted" && (
                    <React.Fragment>
                        <table className="table table-striped">
                            <thead className="thead-dark">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Student Username</th>
                                <th scope="col">Student Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Contact Number</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {students.map((student, index) => (
                                <tr key={index + 1}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{student.username}</td>
                                    <td>{student.studentName}</td>
                                    <td>{student.email}</td>
                                    <td>{student.contactnumber}</td>
                                    <td>
                                        <Link
                                            className="btn btn-outline-primary mr-2"
                                            to={`/student/viewonly/${student.id}`}
                                        >
                                            View
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </React.Fragment>
                )}
            </div>
        </div>
    );
}

export default CompanyHome;
