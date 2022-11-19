import React, { useState } from 'react';
import { Chart } from 'primereact/chart';


export const Statistics = () => {

    const [basicData] = useState({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: '#42A5F5',
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: 'My Second dataset',
                backgroundColor: '#FFA726',
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    });

    const [chartData] = useState({
        labels: ['A', 'B', 'C'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#42A5F5",
                    "#66BB6A",
                    "#FFA726"
                ],
                hoverBackgroundColor: [
                    "#64B5F6",
                    "#81C784",
                    "#FFB74D"
                ]
            }
        ]
    });

    const [lightOptions] = useState({
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        }
    });



    const getLightTheme = () => {
        let basicOptions = {
            maintainAspectRatio: false,
            aspectRatio: .8,
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };

        return {
            basicOptions
        }
    }

    const { basicOptions } = getLightTheme();

    return (
        <div>
            <div className="card" style={{padding:'50px 100px 10px'}}>
                <p className="text-3xl xl:font-bold" >Ingresos</p>
                <Chart type="bar" data={basicData} options={basicOptions} />
                <br/><br/>
                <p className="text-3xl xl:font-bold" >Rentas</p>
            </div>

            <div className="card" style={{display:'flex',justifyContent:'center'}}>
                <Chart type="pie" data={chartData} options={lightOptions} style={{ position: 'relative', width: '25%',  }} />
            </div>
        </div>
    );
}

export default Statistics;