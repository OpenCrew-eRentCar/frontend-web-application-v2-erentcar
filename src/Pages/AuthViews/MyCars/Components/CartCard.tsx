import { Button } from "primereact/button";
import CarEntity from "../../../../Models/Car.model";


type Props = {
    car: CarEntity,
    deleteData: (id: number) => void
}

export default function CartCard(props: Props) {
    
    return (
        <div className="bg-card-content flex max-w-[400px] md:max-w-[600px] md:max-h-[300px] rounded-[15px] shadow-sm mx-auto mt-[23px]">
            <div className=" md:w-[476px] md:flex border-r-2 border-gray-300 md:border-r-0">
                <div className="md:w-[220px] bg-card-image rounded-l-[15px] grid content-center">{/*
                    <div className="hidden md:flex justify-end pr-[16px] pt-[16px] h-[50px]">
                        <button onClick={() => props.deleteData(props.id)}>
                            <i className="pi pi-heart-fill" style={{ fontSize: "2em" }}></i>
                        </button>
    </div>*/}
                    <div>
                        <img src={props.car.imagePath} alt="car"/>
                    </div>
                </div>
                <div className="md:w-[256px] md:border-r-2 border-gray-300 px-[12px] py-[15px]">
                    <p className="text-[20px] font-bold">
                        {props.car.carModel.name}
                    </p>
                    <div className="flex items-center py-1">
                        <div className="flex items-center">
                            <i className="pi pi-user" style={{ fontSize: "17px" }}></i>
                            <p className="ml-2 font-bold text-[14px]">
                                {props.car.seating}
                            </p>
                        </div>
                        <div className="flex items-center ml-4">
                            <i className="pi pi-sitemap" style={{ fontSize: "17px" }}></i>
                            <p className="ml-2 font-bold text-[14px]">
                                {props.car.manual ? "M" : "A"}
                            </p>
                        </div>
                    </div>
                    <div className="flex py-2 items-center border-y-2 border-gray-300">
                        <i className="pi pi-map" style={{ fontSize: "17px" }}></i>
                        <p className="ml-2 text-[12px]">{props.car.address}</p>
                    </div>
                    <ul className="pt-2 list-disc pl-6">
                        <li>{props.car.extraInformation}</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col min-w-[64px] md:min-w-[124px] px-1 md:px-4 py-4">
                <div>
                    <Button icon="pi pi-search" className="p-button-rounded p-button-success p-button-outlined" aria-label="Search" />
                </div>
                <div className="mt-[8px]">
                    <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-outlined" aria-label="Cancel" />
                </div>
                <div className="mt-[8px]">
                    <Button icon="pi pi-user" className="p-button-rounded p-button-info p-button-outlined" aria-label="User" />
                </div>
                <div className="mt-[78px] md:mt-[54px]">
                    <h1 className="text-[20px] font-bold">S/. 80</h1>
                    <p className="text-[12px]">por dia</p>
                </div>
            </div>
        </div>
    )
}