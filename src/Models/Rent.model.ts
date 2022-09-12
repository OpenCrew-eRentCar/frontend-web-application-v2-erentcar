import { Car } from "./Car.model";

export interface Rent {
  id: number;
  clientId: number;
  amount: number;
  startDate: Date;
  finishDate: Date;
  rate: number;
  car: Car;
}