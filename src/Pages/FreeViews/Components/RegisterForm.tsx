import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { useState } from "react";

interface RegisterFormProps {
  displayAuthForm: boolean;
  setDisplayAuthForm: (value: boolean) => void;
  setDisplayLoginForm: (value: boolean) => void;
}

export const RegisterForm = (props: RegisterFormProps) => {
  const [displayGeneralInformationForm, setDisplayGeneralInformationForm] =
    useState(true);

  return (
    <div>
      <h1 className="text-[32px] font-bold text-center mb-4">Registrarse</h1>
      <form className="p-fluid w-[480px]">
        {displayGeneralInformationForm ? (
          <div>
            <h2 className="font-bold mb-4">Información de la cuenta</h2>
            <div>
              <label htmlFor="username" className="block">
                Usuario
              </label>
              <InputText
                id="username"
                placeholder="Ingrese su nombre de usuario"
              />
            </div>

            <div className="mt-3">
              <label htmlFor="email" className="block">
                Correo electrónico
              </label>
              <InputText
                id="email"
                placeholder="Ingrese su correo electrónico"
              />
            </div>

            <div className="mt-3">
              <label htmlFor="password" className="block">
                Contraseña
              </label>
              <InputText id="password" placeholder="Ingrese su contraseña" />
            </div>

            <Button
              label="Siguiente"
              className="!mt-6 mb-auto btn-primary"
              onClick={() => setDisplayGeneralInformationForm(false)}
            />
          </div>
        ) : (
          <div>
            <h2 className="font-bold mb-4">Información personal</h2>

            <div>
              <label htmlFor="names" className="block">
                Nombres
              </label>
              <InputText id="names" placeholder="Ingrese sus nombres" />
            </div>

            <div>
              <label htmlFor="lastnames" className="block mt-3">
                Apellidos
              </label>
              <InputText id="lastnames" placeholder="Ingrese sus apellidos" />
            </div>

            <div>
              <label htmlFor="address" className="block mt-3">
                Dirección
              </label>
              <InputText id="address" placeholder="Ingrese su dirección" />
            </div>

            <div>
              <label htmlFor="phone" className="block mt-3">
                Teléfono
              </label>
              <InputNumber
                id="phone"
                placeholder="Ingrese su teléfono"
                mode="decimal"
                min={900000000}
                max={999999999}
                useGrouping={false}
              />
            </div>

            <div>
              <label htmlFor="profile" className="block mt-3">
                URL de imagen de perfil
              </label>
              <InputText
                id="profile"
                placeholder="Ingrese la URL de su imagen de perfil"
              />
            </div>

            <Button
              label="Registrarse"
              className="!mt-6 mb-auto btn-primary"
              onClick={() => setDisplayGeneralInformationForm(false)}
            />
          </div>
        )}
      </form>

      <div className="border border-x-0 border-b-0 border-t-1 border-t-[#C4C4C4] mt-6 box-border pt-3 text-center">
        ¿Ya tienes una cuenta?{" "}
        <span
          className="color-primary font-bold cursor-pointer"
          onClick={() => props.setDisplayLoginForm(true)}
        >
          Iniciar sesión
        </span>
      </div>
    </div>
  );
};

export default RegisterForm;
