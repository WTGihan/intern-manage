import axios from "axios";

const apiStudentUrl = "http://localhost:3004/students";

export function getStudents() {
  return axios.get(apiStudentUrl);
}

export function addNewStudent(student) {
  return axios.post(apiStudentUrl, student);
}

export function getStudentDetails(id) {
  return axios.get(apiStudentUrl + "/" + id);
}

export function editStudentDetails(id, student) {
  return axios.put(apiStudentUrl + "/" + id, student);
}

export function deleteStudent(id) {
  return axios.delete(apiStudentUrl + "/" + id);
}
