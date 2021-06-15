import axios from "axios";

const apiCompanyUrl = "http://localhost:3004/companies";

export function getCompanies() {
  return axios.get(apiCompanyUrl);
}

export function addNewCompany(company) {
  return axios.post(apiCompanyUrl, company);
}

export function getCompanyDetails(id) {
  return axios.get(apiCompanyUrl + "/" + id);
}

export function editCompanyDetails(id, company) {
  return axios.put(apiCompanyUrl + "/" + id, company);
}
