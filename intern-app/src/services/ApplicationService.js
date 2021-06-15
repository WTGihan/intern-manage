import axios from "axios";

const apiApplicationUrl = "http://localhost:8080/api/intern/application";

export function getApplications() {
  return axios.get(apiApplicationUrl);
}

export function addNewApplication(application) {
  return axios.post(apiApplicationUrl, application);
}

export function getApplicationDetails(id) {
  return axios.get(apiApplicationUrl + "/" + id);
}

export function editApplicationDetails(id, application) {
  return axios.put(apiApplicationUrl + "/" + id, application);
}

export function deleteApplication(id) {
  return axios.delete(apiApplicationUrl + "/" + id);
}
