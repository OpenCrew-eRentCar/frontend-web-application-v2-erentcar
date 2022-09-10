import UserLogin from "../Models/UserLogin.model";
import UserRegister from "../Models/UserRegister.model";
import http from "./http-common";

class AuthService {
  private baseUrl = "users/auth";

  login(data: UserLogin) {
    return http.post(this.baseUrl + "/login", data);
  }

  register(data: UserRegister) {
    return http.post(this.baseUrl + "/register", data);
  }
}

export default new AuthService();