import { Navigate } from "react-router";
import Header from "../../Components/Header";
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";
import { useState } from "react";
import Filters from "./SearchCar/Filters";

export const Authviews = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isAuth = localStorage.getItem("TOKEN") ? true : false;

  const items = [
    {
      items: [
        {
          label: "Buscar autos",
          icon: "pi pi-search",
        },
        {
          label: "Mis autos",
          icon: "pi pi-car",
        },
      ],
    },
  ];

  return (
    <>
      {isAuth ? (
        <div className="flex flex-col h-full">
          <Header
            authenticated={true}
            onClickMenuButton={() => setShowMenu(!showMenu)}
          />
          <div className="flex h-full relative">
            <Menu
              model={items}
              className={"navigation-menu " + (showMenu ? "active " : "")}
            />
            <div
              className={
                "flex flex-col auth-content w-full " +
                (showMenu ? "active " : "")
              }
            >
              <div className="w-[840px] h-[400px] bg-red-100 mx-auto">
                <Filters />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/" replace={true} />
      )}
    </>
  );
};

export default Authviews;
