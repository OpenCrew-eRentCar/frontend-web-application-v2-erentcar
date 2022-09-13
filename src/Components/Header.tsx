import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";

const logo = require("../Assets/logo.png");

interface HeaderProps {
  authenticated: boolean;
  onClickLoginButton?: () => void;
  showMenu?: boolean;
  onClickMenuButton?: () => void;
}

export const Header = (props: HeaderProps) => {
  const clientNames = JSON.parse(localStorage.getItem("CLIENT") || "{}").names;

  const start = <img alt="logo" src={logo} />;
  const end = props.authenticated ? (
    <div className="flex w-full">
      <Button
        icon="pi pi-bars"
        className="p-button-text color-primary md:!hidden"
        onClick={props.onClickMenuButton}
      />
      <Button icon="pi pi-heart-fill" className="!ml-auto !mr-3 btn-primary" />
      <Button label={clientNames} className="btn-secondary p-button-outlined" />
    </div>
  ) : (
    <Button
      label="Iniciar sesión"
      className="btn-primary"
      onClick={props.onClickLoginButton}
    />
  );

  return <Menubar start={start} end={end} />;
};

export default Header;
