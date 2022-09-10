import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import 'primeicons/primeicons.css';
import { useNavigate } from "react-router-dom";

const logo = require("../Assets/logo.png");

interface HeaderProps {
  authenticated: boolean;
}

export const Header = (props: HeaderProps) => {
  const navigate = useNavigate();

  const start = <img alt="logo" src={logo} />;
  const end = props.authenticated ? (
    <div>
      <Button icon="pi pi-heart-fill" className="!mr-3 p-button-info" />
      <Button label="Juan Perez" className="p-button-info p-button-outlined" />
    </div>
  ) : (
    <Button label="Iniciar sesión" className="p-button-info" onClick={() => {navigate("/auth")}}/>
  );

  return <Menubar start={start} end={end} />;
};

export default Header;
