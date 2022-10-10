import { Button } from "primereact/button";
import Favourite from "../../../../Models/Favourite.model";

type Props = {
  favs: Favourite;
  deleteData: (id: number) => void;
};

function FavoriteCard(props: Props) {
  return (
    <div className="bg-card-content flex max-w-[400px] md:max-w-[600px] md:h-[300px] rounded-[15px] shadow-sm mx-auto mt-[35px]">
      <div className=" md:w-[476px] md:flex border-r-2 border-gray-300 md:border-r-0">
        <div className="lg:w-[220px] bg-primary rounded-l-lg flex relative">
          <img alt="car" src={props.favs.car.imagePath} className="my-auto" />
          <Button
            icon="pi pi-heart"
            className="!absolute !right-0 text-center p-button-rounded p-button-text !text-black !w-[50px] !bg-[#CEE4FF] hover:!bg-cyan-100"
            onClick={() => props.deleteData(props.favs.id)}
          />
        </div>
        <div className="md:w-[256px] md:border-r-2 border-gray-300 px-[12px] py-[15px]">
          <p className="text-[20px] font-bold">
            {props.favs.car.carModel.name}
          </p>
          <div className="flex items-center py-1">
            <div className="flex items-center">
              <i className="pi pi-user" style={{ fontSize: "17px" }}></i>
              <p className="ml-2 font-bold text-[14px]">
                {props.favs.car.seating}
              </p>
            </div>
            <div className="flex items-center ml-4">
              <i className="pi pi-sitemap" style={{ fontSize: "17px" }}></i>
              <p className="ml-2 font-bold text-[14px]">
                {props.favs.car.manual ? "M" : "A"}
              </p>
            </div>
          </div>
          <div className="flex py-2 items-center border-y-2 border-gray-300">
            <i className="pi pi-map" style={{ fontSize: "17px" }}></i>
            <p className="ml-2 text-[12px]">{props.favs.car.address}</p>
          </div>
          <ul className="pt-2 list-disc pl-6">
            <li>{props.favs.car.extraInformation}</li>
          </ul>
        </div>
      </div>
      <div className="md:max-w-[124px] px-1 py-4 md:grid md:content-end">
        <div>
          <div className="pt-[200px]">
            <p className="text-[20px] font-bold">
              S/ {props.favs.car.rentAmountDay}
            </p>
            <span className="text-[12px]">por dia</span>
            <div className="">
              <Button
                label="Submit"
                className="!ml-auto btn-primary p-button-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavoriteCard;
