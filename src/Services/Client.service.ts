import http from "./http-common";

class ClientService {
  private BASE_URL = "clients";

  getClientByToken() {
    return http.get(this.BASE_URL + "/token");
  }
}

export default new ClientService();