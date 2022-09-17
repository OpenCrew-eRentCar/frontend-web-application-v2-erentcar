import "primeicons/primeicons.css";
import { Button } from "primereact/button";
import CarEntity from "../../../../Models/Car.model";

const car = require("../../../../Assets/car.png");
const gearBoxIcon = require("../../../../Assets/gearbox.png");

interface CarProps {
  car: CarEntity;
}

export const Car = (props: CarProps) => {
  return (
    <div className="flex w-full w-[600px] h-[300px] mb-5 bg-[#F3F1F1] rounded-lg">
      <div className="w-[220px] h-full bg-primary rounded-l-lg flex relative">
        <img alt="car" src={props.car.imagePath} className="my-auto" />
        <Button
          icon="pi pi-heart "
          className="!absolute !right-0 text-center p-button-rounded p-button-text !text-black !w-[50px] hover:!bg-cyan-100"
        />
      </div>
      <div className="w-[240px] box-border p-3 text-sm">
        <div className="border-b-2 border-[#C4C4C4]">
          <h1 className="font-bold text-xl">
            {props.car.carModel.carBrand.name} {props.car.carModel.name}
          </h1>
          <div className="my-3">
            <span className="mr-5">
              <i className="pi pi-user mr-3" />
              <span>{props.car.seating}</span>
            </span>
            <span>
              <img
                alt="gearbox"
                src={gearBoxIcon}
                className="w-[16px] h-[16px] my-auto mr-3 inline"
              />
              <span>{props.car.manual ? "M" : "A"}</span>
            </span>
          </div>
        </div>
        <div className="border-b-2 border-[#C4C4C4] py-3 mb-3">
          <i className="pi pi-map" />
          <span className="ml-2">{props.car.address}</span>
        </div>
        <div className="grid grid-cols-2">
          <ul className="!list-disc pl-5 text-sm">
            <li>Seguro contra accidentes</li>
            <li>Seguro contra robos</li>
          </ul>
          <ul className="!list-disc pl-5  text-sm">
            <li>Limpieza profunda</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col w-[140px] h-full border-l-2 border-[#C4C4C4] box-border p-3">
        <p className="text-xl font-bold mt-auto">S/ {props.car.rentAmountDay}</p>
        <p className="my-2">Por día</p>
        <Button
          label="Ver oferta"
          className="w-full mt-5 !text-sm btn-primary"
        />
      </div>
    </div>
  );
};

export default Car;
