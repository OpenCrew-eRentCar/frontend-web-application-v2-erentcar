import { useState } from "react";
import { Navigate, Outlet } from "react-router";
import Header from "../../Components/Header";
import SidebarMenu from "../../Components/SidebarMenu";

export const Authviews = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isAuth = localStorage.getItem("TOKEN") ? true : false;

  return (
    <>
      {isAuth ? (
        <div className="flex flex-col h-full">
          <Header
            authenticated={true}
            onClickMenuButton={() => setShowMenu(!showMenu)}
          />
          <div className="flex h-full relative">
            <SidebarMenu showMenu={showMenu} />
            <div
              className={
                "flex flex-col auth-content w-full " +
                (showMenu ? "active " : "")
              }
            >
              <Outlet />
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
