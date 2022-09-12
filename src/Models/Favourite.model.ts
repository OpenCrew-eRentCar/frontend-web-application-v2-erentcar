import { Car } from "./Car.model";

export interface Favourite {
  id: number;
  clientId: number;
  car: Car;
}
