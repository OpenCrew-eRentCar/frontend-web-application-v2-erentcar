import { CarBrand } from "./CarBrand.model";

export interface CarModel {
  id: number;
  carBrand: CarBrand;
  imagePath: string;
  name: string;
}