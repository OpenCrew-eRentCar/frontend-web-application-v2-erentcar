import { useState } from "react";
import { Button } from 'primereact/button';

const initialState = {
  id: 1,
  clientId: 20,
  car: {
    id: 1,
    active: true,
    address: "Cabo blanco con tres marias",
    carModel: {
      id: 3,
      carBrand: {
        id: 4,
        imagePath: "https://img.remediosdigitales.com/ea3a4d/10974309_1087071384651814_2377105394985826515_o/1366_2000.jpg",
        name: "Lamborguini",
      },
      imagePath: "--------",
      name: "Aventador",
    },
    carValueInDollars: 35000,
    category: {
      LARGE: "LARGE",
    },
    extraInformation: "Esta con la luna rota",
    imagePath: "https://assets.stickpng.com/images/580b585b2edbce24c47b2c8e.png",
    manual: true,
    mechanicConditions: {
      REGULAR: "REGULAR",
    },
    mileage: 44,
    rate: 3.15,
    rentAmountDay: 85,
    seating: 4,
    year: 2002,
    clientId: 5
  }
}

export const Favourites = () => {
  const [favouriteCards, setFavouriteCards] = useState(initialState)

  return (
    <div className="bg-card-content md:flex max-w-[400px] md:max-w-[700px] md:h-[350px] rounded-[15px] shadow-sm mx-auto mt-[35px]">
      <div className="md:w-[35%] bg-card-image rounded-l-[15px] content-center">
        <div className="flex justify-end pr-[10px] py-[10px] h-[50px]">
          <i className="pi pi-heart-fill" style={{ 'fontSize': '2em' }}></i>
        </div>
        <div className="h-[250px] grid content-center">
          <img src={favouriteCards.car.imagePath} />
        </div>
      </div>
      <div className="md:w-[43%] md:border-r-2 px-5 py-5 border-gray-300">
        <p className="text-[25px] font-bold">{favouriteCards.car.carModel.name}</p>
        <div className="flex items-center py-1">
          <div className="flex items-center">
            <i className="pi pi-user" style={{ 'fontSize': '1em' }}></i>
            <p className="ml-2 font-bold">{favouriteCards.car.seating}</p>
          </div>
          <div className="flex items-center ml-4">
            <i className="pi pi-sitemap" style={{ 'fontSize': '1em' }}></i>
            <p className="ml-2 font-bold">{favouriteCards.car.manual ? "M" : "A"}</p>
          </div>
        </div>
        <div className="flex py-2 items-center border-y-2 border-gray-300">
          <i className="pi pi-map" style={{ 'fontSize': '1em' }}></i>
          <p className="ml-2">{favouriteCards.car.address}</p>
        </div>
        <ul className="pt-2 list-disc pl-6">
          <li>{favouriteCards.car.extraInformation}</li>
        </ul>
      </div>
      <div className="md:max-w-[22%] px-2 py-4 grid md:content-end">
        <div>
          <p className="text-[25px] font-bold">S/ {favouriteCards.car.rentAmountDay}</p>
          <span className="text-[15px]">por dia</span>
        </div>
        <Button
          label="Ver oferta"
          className="!ml-auto btn-primary"
        />
      </div>
    </div>
  );
}

export default Favourites;