import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import User from "../../../../Models/User.model";

interface GeneralConfigurationProps {
  client: User;
}

export const GeneralConfiguration = (props: GeneralConfigurationProps) => {
  return (
    <div className="border-box p-3 border rounded-md">
      <h1 className="text-xl font-bold mb-3">Información personal</h1>
      <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
        <div className="mb-3">
          <label htmlFor="names" className="block">
            Nombres
          </label>
          <InputText
            id="names"
            value={props.client.names}
            className="w-[300px]"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastNames" className="block">
            Apellidos
          </label>
          <InputText
            id="lastNames"
            value={props.client.lastNames}
            className="w-[300px]"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cellphone" className="block">
            Número telefónico
          </label>
          <InputText
            id="cellphone"
            value={props.client.cellphoneNumber}
            className="w-[300px]"
          />
        </div>
        <Button label="Editar" className="w-[100px] btn-primary !mx-auto" />
      </form>
    </div>
  );
};

export default GeneralConfiguration;
