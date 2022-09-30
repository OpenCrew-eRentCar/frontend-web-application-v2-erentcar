import { number } from "yup";
import Favourite from "../Models/Favourite.model";
import http from "./http-common"

class FavouriteService {
    private BASE_URL = "favourites/"

    get() {
        return http.get(this.BASE_URL)
    }

    delete(id: number) {
        return http.delete(this.BASE_URL + id)
    }
}

export default new FavouriteService