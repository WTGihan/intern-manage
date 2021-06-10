import axios from "axios";

const apiCampusAdminUrl = "http://localhost:3004/campusAdmin";

export function getCampusAdmins() {
    return axios.get(apiCampusAdminUrl);
}

export function addNewCampusAdmin(campusAdmin) {
    return axios.post(apiCampusAdminUrl, campusAdmin);
}

export function getCampusAdminDetails(id) {
    return axios.get(apiCampusAdminUrl + "/" + id);
}

export function editCampusAdminDetails(id, campusAdmin) {
    return axios.put(apiCampusAdminUrl + "/" + id, campusAdmin);
}

export function deleteCampusAdmin(id) {
    return axios.delete(apiCampusAdminUrl + "/" + id);
}
