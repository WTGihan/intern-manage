import axios from "axios";

const apiUserUrl = "http://localhost:3004/users";

export function getUsers() {
    return axios.get(apiUserUrl);
}

export function addNewUser(user) {
    return axios.post(apiUserUrl, user);
}

export function getUserDetails(id) {
    return axios.get(apiUserUrl + "/" + id);
}

export function editUserDetails(id, user) {
    return axios.put(apiUserUrl + "/" + id, user);
}

export function deleteUser(id) {
    return axios.delete(apiUserUrl + "/" + id);
}
