import RentEntity from "../../../Models/Rent.model";

interface RentProps {
    rent: RentEntity
}

export const Rent = (props: RentProps) => {
    var startDate = `${props.rent.startDate}`;
    var finishDate = `${props.rent.finishDate}`;
    return (
        <div className="bg-card-content flex rounded-[15px] shadow-sm mx-auto mt-[35px] max-w-[600px]" style={{background: 'whitesmoke'}}>
            <div className=" md:flex border-r-2 border-gray-300 md:border-r-0">
                <div className="md:w-[220px] rounded-l-[15px] content-center" style={{background: 'lightblue'}}>
                    <div className="hidden md:flex justify-end pr-[16px] pt-[16px] h-[50px]">
                        <button onClick={() => {
                        }}>
                            <i className="pi pi-heart-fill" style={{fontSize: "2em"}}></i>
                        </button>
                    </div>
                    <div className="pt-[25px]">
                        <img src={props.rent.car.carModel.imagePath} alt="car"/>
                    </div>
                </div>
                <div className=" md:border-r-2 border-gray-300 px-[12px] py-[15px]">
                    <p className="text-[20px] font-bold">
                        {props.rent.car.carModel.name}
                    </p>
                    <div className="flex items-center py-1">
                        <div className="flex items-center">
                            <i className="pi pi-user" style={{fontSize: "17px"}}></i>
                            <p className="ml-2 font-bold text-[14px]">
                                {props.rent.car.seating}
                            </p>
                        </div>
                        <div className="flex items-center ml-4">
                            <i className="pi pi-sitemap" style={{fontSize: "17px"}}></i>
                            <p className="ml-2 font-bold text-[14px]">
                                {props.rent.car.manual ? "M" : "A"}
                            </p>
                        </div>
                    </div>
                    <div className="flex py-2 items-center border-t-2 border-gray-300">
                        <i className="pi pi-map" style={{fontSize: "17px"}}></i>
                        <p className="ml-2 text-[12px]">{props.rent.car.address}</p>
                    </div>
                    <ul className="pt-2 list-disc pl-6">
                        <li>{props.rent.car.extraInformation}</li>
                    </ul>
                </div>
            </div>
            <div className="md:max-w-[124px] px-1 py-4 md:grid md:content-end" style={{background: 'whitesmoke'}}>
                <div>
                    <div className="pt-[50px]">
                        <p className="text-[20px] font-bold pb-5">
                            Detalles de la Renta
                        </p>
                        <div className="flex items-center justify-between">
                            <p className="text-[15px] font-bold pr-[20px]">
                                Tarifa por día
                            </p>
                            <p className="text-[20px] font-bold">
                                S/{props.rent.car.rentAmountDay}
                            </p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-[15px] font-bold pr-[20px]">
                                Rango de fechas
                            </p>
                            <p className="text-[10px]">
                                {startDate}-{finishDate}
                            </p>
                        </div>
                        <div className="py-2 items-center border-t-2 border-gray-300">
                            <div className="flex items-center justify-between">
                                <p className="text-[15px] font-bold pr-[20px]">
                                    Total Pagado
                                </p>
                                <p className="text-[20px] font-bold">
                                    S/{props.rent.amount}
                                </p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-[15px] font-bold pr-[20px]">
                                    Estado de renta
                                </p>

                                {props.rent.car.active ? <div className="rounded-2xl px-4 py-1 content-end"
                                                              style={{background: 'lightgreen', color: 'white'}}>
                                    Activo
                                </div> : <div className="rounded-2xl px-4 py-1 content-end"
                                              style={{background: 'lightpink', color: 'white'}}>
                                    Finalizado
                                </div>}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rent;