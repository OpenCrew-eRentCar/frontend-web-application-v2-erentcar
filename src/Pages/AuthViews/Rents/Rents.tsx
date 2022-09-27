import {useEffect, useState} from "react";
import RentsService from "../../../Services/Rent.service"
import RentEntity from "../../../Models/Rent.model";
import Rent from "./Rent";

export const Rents = () => {
  const [rents, setRents] = useState([] as RentEntity[])

  useEffect(() => {
    const fetchRents = async () => {
      await RentsService.getRentsByToken()
          .then(response => {
              console.log(response)
            setRents(response?.data.content as RentEntity[]);
          })
          .catch(error => {
            console.log(error)
          })
    }
    fetchRents()
  })

  return (
      <div className="w-full mx-auto lg:ml-5 max-w-[600px] px-3 lg:p-0 border-box lg:border-content">
          {rents.map((rent) => (
              <Rent key={rent.id} rent={rent} />
          ))}
      </div>
  );
}

export default Rents;