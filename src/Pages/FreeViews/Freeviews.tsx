import { useState } from "react";
import Header from "../../Components/Header";
import { Dialog } from "primereact/dialog";
import LoginForm from "./Components/LoginForm";
import RegisterForm from "./Components/RegisterForm";
import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';

export const Freeviews = () => {
    const [displayAuthForm, setDisplayAuthForm] = useState(false);
    const [displayLoginForm, setDisplayLoginForm] = useState(true);

    const onClickLoginButton = () => {
        setDisplayAuthForm(true);
    };

    const header = (
        <img alt="Card" src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?ixlib=rb-1.2.1&ixid=MnwxMjA3fD
        B8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"/>
    );



    return (
        <div >
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
            <br></br><br></br>
            <div className="cars">
                <p className="text-4xl">Este año recorre todo el Perú</p>
            </div>
            <div>
                <div className="flex flex-row-reverse flex-wrap card-container white-container">
                    <Button label="Ver todos" className="p-button-outlined p-button-info" />
                </div>

                <div className="cars">
                    <div className="flex flex-wrap justify-content-center card-container blue-container gap-3">
                        <Card  className="border-round w-12rem h-6rem" title="Kia Picanto" subTitle=" " style={{ width: '13em' }}  header={header}>
                            <p className="m-0" style={{lineHeight: '0.8'}}>S/70</p>
                        </Card>
                        <Card  className="border-round w-12rem h-6rem" title="Kia Picanto" subTitle=" " style={{ width: '13em' }}  header={header}>
                            <p className="m-0" style={{lineHeight: '0.8'}}>S/70</p>
                        </Card>

                        <Card  className="border-round w-12rem h-6rem" title="Kia Picanto" subTitle=" " style={{ width: '13em' }}  header={header}>
                            <p className="m-0" style={{lineHeight: '0.8'}}>S/70</p>
                        </Card>

                        <Card  className="border-round w-12rem h-6rem" title="Kia Picanto" subTitle=" " style={{ width: '13em' }}  header={header}>
                            <p className="m-0" style={{lineHeight: '0.8'}}>S/70</p>
                        </Card>
                    </div>
                </div>
            </div>

            <br></br><br></br>
            <div className="cars">
                <p className="text-3xl">Estas son las razones porque las personas elijen eRentCar</p>
            </div>

            <div className="cars">
                <div className="flex flex-wrap justify-content-center card-container blue-container gap-3">
                    <Card  title="Seguridad Sanitaria" subTitle=" " style={{ width: '13em' }}>
                        <i className="pi pi-car mr-2"></i>
                        <p className="m-0" style={{lineHeight: '0.8'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum
                            nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                    </Card>

                    <Card  title="Facilidad de alquiler" subTitle=" " style={{ width: '13em' }} >
                        <i className="pi pi-building mr-2"></i>
                        <p className="m-0" style={{lineHeight: '0.8'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum
                            nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                    </Card>
                    <Card title="Genera Ganancias" subTitle=" " style={{ width: '13em' }} >
                        <i className="pi pi-dollar mr-2"></i>
                        <p className="m-0" style={{lineHeight: '0.8'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum
                            nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                    </Card>
                    <Card  title="Estadísticas &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"  subTitle=" " style={{ width: '13em' }} >

                        <i className="pi pi-calendar-minus mr-2"></i>
                        <p className="m-0" style={{lineHeight: '0.8'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum
                            nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                    </Card>
                </div>
            </div>




        </div>


    );
};

export default Freeviews;
