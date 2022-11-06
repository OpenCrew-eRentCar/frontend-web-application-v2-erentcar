import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FavouriteButton from "../../../../Components/FavouriteButton";
import CarEntity from "../../../../Models/Car.model";

const gearBoxIcon = require("../../../../Assets/gearbox.png");

interface CarProps {
  loading: boolean;
  car: CarEntity;
}

export const Car = (props: CarProps) => {
  const [dates, setDates] = useState<Date[]>([new Date(), new Date()]);
  const [days, setDays] = useState(1);
  const navigate = useNavigate();

  const onChangeCalendar = (e: any) => {
    setDates(e.value);

    if (e.value.every((date: Date) => date instanceof Date)) {
      const startDate: number = new Date(
        e.value[0].getFullYear(),
        e.value[0].getMonth(),
        e.value[0].getDate()
      ).getTime();
      const endDate: number = new Date(
        e.value[1].getFullYear(),
        e.value[1].getMonth(),
        e.value[1].getDate()
      ).getTime();
      const days = Math.floor((endDate - startDate) / (1000 * 3600 * 24)) + 1;
      setDays(days);
    }
  };

  return (
    <>
      {props.loading ? (
        <>Loading...</>
      ) : (
        <div className="mt-5">
          <div className="grid grid-cols-2 gird-rows-2 lg:flex w-full lg:h-[300px] mb-5 bg-[#F3F1F1] rounded-lg">
            <div className="col-span-1 lg:w-[220px] h-full bg-primary rounded-l-lg flex relative">
              <img
                alt="car"
                src={props.car.imagePath}
                className="my-auto w-full"
              />
              <FavouriteButton carId={props.car.id} />
            </div>
            <div className="col-span-1 lg:w-[240px] box-border p-3 text-sm">
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
                <ul className="!list-disc pl-5 text-sm">
                  <li>Limpieza profunda</li>
                </ul>
              </div>
            </div>
            <div className="col-span-2 flex flex-col lg:w-[370px] h-full border-t-2 lg:border-t-0 lg:border-l-2 border-[#C4C4C4] box-border p-3 col-span-2 font-bold">
              <h1 className="text-xl">Detalles del precio</h1>
              <div className="flex mt-4">
                <span>Tarifa por día</span>
                <span className="ml-auto text-xl">
                  S/ {props.car.rentAmountDay}
                </span>
              </div>
              <div className="flex mt-4">
                <span>Rango de fechas</span>
                <Calendar
                  id="range"
                  value={dates}
                  onChange={onChangeCalendar}
                  selectionMode="range"
                  readOnlyInput
                  minDate={new Date()}
                  className="ml-auto"
                />
              </div>
              <div className="flex mt-4 pt-4 border-t-2 border-[#C4C4C4]">
                <span>Total a pagar</span>
                <span className="ml-auto text-xl">
                  S/ {days * props.car.rentAmountDay}
                </span>
              </div>
            </div>
          </div>

          <div className="flex">
            <Button
              label="Rentar"
              className="btn-primary !mx-auto"
              onClick={() =>
                navigate(
                  "pay-rent?totalAmount=" +
                    days * props.car.rentAmountDay +
                    "&startDate=" +
                    dates[0] +
                    "&finishDate=" +
                    dates[1]
                )
              }
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Car;
