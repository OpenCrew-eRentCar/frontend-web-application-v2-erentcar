import CreateClient from "../Models/CreateClient.model";
import http from "./http-common";

class RentService {
    private BASE_URL = "rents";

    getRentsByToken() {
        return http.get(this.BASE_URL);
    }
}

export default new RentService();