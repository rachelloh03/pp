import http from "../http-common";

class UserDataService {
  getAll() {
    return http.get("/users");
  }

  get(username) {
    return http.get(`/users/${username}`);
  }

  create(data) {
    return http.post("/users", data);
  }

  update(username, data) {
    return http.put(`/users/${username}`, data);
  }

  delete(username) {
    return http.delete(`/users/${username}`);
  }

  deleteAll() {
    return http.delete(`/users`);
  }

  findByUsername(username) {
    return http.get(`/users?username=${username}`);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UserDataService();
