import { useState } from "react";
import Header from "../../Components/Header";
import { Dialog } from "primereact/dialog";
import LoginForm from "./Components/LoginForm";
import RegisterForm from "./Components/RegisterForm";

export const Freeviews = () => {
  const [displayAuthForm, setDisplayAuthForm] = useState(false);
  const [displayLoginForm, setDisplayLoginForm] = useState(true);

  const onClickLoginButton = () => {
    setDisplayAuthForm(true);
  };

  return (
    <div>
      <Header authenticated={false} onClickLoginButton={onClickLoginButton} />
      <h1>Freeviews</h1>
      <Dialog visible={displayAuthForm} onHide={() => setDisplayAuthForm(false)}>
        {displayLoginForm ? (
          <LoginForm
            displayAuthForm={displayAuthForm}
            setDisplayAuthForm={setDisplayAuthForm}
            setDisplayLoginForm={setDisplayLoginForm}
          />
        ) : (
          <RegisterForm
            displayAuthForm={displayAuthForm}
            setDisplayAuthForm={setDisplayAuthForm}
            setDisplayLoginForm={setDisplayLoginForm}
          />
        )}
      </Dialog>
    </div>
  );
};

export default Freeviews;
