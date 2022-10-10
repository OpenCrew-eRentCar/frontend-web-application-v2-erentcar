import CartCard from "./Components/CartCard";
import FavoritesService from "../../../Services/Favorites.service";
import CarsService from "../../../Services/Cars.service";
import { useEffect, useRef, useState } from "react";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import CarEntity from "../../../Models/Car.model";

export const MyCars = () => {
  const [loading, setLoading] = useState(true);
  const [arrayCars, setArrayFavouritesCars] = useState<CarEntity[]>([]);
  const toastCars = useRef<Toast>(null);

  const deleteData = async (id: number) => {
    await FavoritesService.delete(id).then(() => {
      fetchCars();
      toastCars.current?.show({
        severity: "error",
        summary: "DELETED",
        detail: "Favorite deleted",
        life: 3000,
      });
    });
  };

  const fetchCars = async () => {
    setLoading(true);
    await CarsService.getAll().then((res: any) => {
      setArrayFavouritesCars(res.data.content);
    });
    setLoading(false);
  };

  useEffect(() => {
    fetchCars();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col pt-[25px]">
      <Toast ref={toastCars} position="bottom-right" />
      <div className="max-w-[160px] mx-auto">
        <Button
          label="Añadir nuevo auto"
          className="!ml-auto btn-primary p-button-sm"
        />
      </div>

      {loading ? (
        <h1>Loading ...</h1>
      ) : !arrayCars ? (
        <h1>No Favorites added</h1>
      ) : (
        arrayCars.map((element) => (
          <CartCard
            key={element.id}
            car={element}
            deleteData={deleteData}
          />
        ))
      )}
    </div>
  );
}

export default MyCars;