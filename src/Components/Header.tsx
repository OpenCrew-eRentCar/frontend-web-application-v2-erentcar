import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import 'primeicons/primeicons.css';
import { useNavigate } from "react-router-dom";

const logo = require("../Assets/logo.png");

interface HeaderProps {
  authenticated: boolean;
  onClickLoginButton?: () => void;
}

export const Header = (props: HeaderProps) => {
  const start = <img alt="logo" src={logo} />;
  const end = props.authenticated ? (
    <div>
      <Button icon="pi pi-heart-fill" className="!mr-3 btn-primary p-button-info" />
      <Button label="Juan Perez" className="btn-secondary p-button-outlined" />
    </div>
  ) : (
    <Button label="Iniciar sesión" className="btn-primary" onClick={props.onClickLoginButton}/>
  );

  return <Menubar start={start} end={end} />;
};

export default Header;
