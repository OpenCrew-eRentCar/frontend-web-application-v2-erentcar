import SearchCarFilters from "../Models/SearchCarFilters.model";
import http from "./http-common";

class CarsService {
  private BASE_URL = "cars";

  searchCars(filters: SearchCarFilters) {
    return http.post(this.BASE_URL + "/search", filters);
  }
}

export default new CarsService();