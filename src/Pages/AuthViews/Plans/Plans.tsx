import React from 'react';
import { Card } from 'primereact/card';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';

const Plans = () => {

    const footer = (
        <button style={{backgroundColor:'rgb(33, 150, 243) ', width:'100%', color:'white', borderRadius:'10px', height:'50px'}}> Comprar</button>
    );
    return (
        <div >
            <br/>
            <p className="text-3xl xl:font-bold" style={{display:'flex', justifyContent:'center'}}>Adquire un plan Para ver las estadísticas de tus autos</p>
            <br></br>
            <div className="blue-container gap-3" style={{display:'flex' , justifyContent:'center'}}>

            <Card title="Basic" style={{ width: '20em',height:'22em'}} footer={footer}>
                <p className="text-lg xl:font-bold">s/10</p>
                <br></br>
                <li className="pi pi-check-circle"> Caracteristica 1</li>
                <br></br>
                <li className="pi pi-check-circle"> Caracteristica 1</li>
                <br></br>
                <li className="pi pi-check-circle"> Caracteristica 1</li>
                <br></br>
                <li className="pi pi-check-circle"> Caracteristica 1</li>
            </Card>

            <Card title="Premium" style={{ width: '20em',height:'22em'}} footer={footer}>
                <p className="text-lg xl:font-bold">s/20</p>
                <br></br>
                <li className="pi pi-check-circle"> Caracteristica 1</li>
                <br></br>
                <li className="pi pi-check-circle"> Caracteristica 1</li>
                <br></br>
                <li className="pi pi-check-circle"> Caracteristica 1</li>
                <br></br>
                <li className="pi pi-check-circle"> Caracteristica 1</li>
            </Card>

            <Card title="Gold" style={{ width: '20em',height:'22em'}} footer={footer}>
                <p className="text-lg xl:font-bold">s/30</p>
                <br></br>
                <li className="pi pi-check-circle"> Caracteristica 1</li>
                <br></br>
                <li className="pi pi-check-circle"> Caracteristica 1</li>
                <br></br>
                <li className="pi pi-check-circle"> Caracteristica 1</li>
                <br></br>
                <li className="pi pi-check-circle"> Caracteristica 1</li>
            </Card>
            </div>
        </div>
    )
}

export default Plans;