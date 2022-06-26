import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Header from '../../partials/Header';
import Sidebar from '../../partials/Sidebar';

const Vehicle = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/vehicles')
            .then(response => response.json())
            .then(response => {
                if (response.ok) setData(response.data);
            })
            .catch(error => console.log(error));
    }, []);
    return (
        <>
            <Sidebar />
            <Header />
            <div className="main-index">
                <div className="main-index-top add">
                    <h2>Vehiculos</h2>
                    <Link to='/vehicles/create'><i className="fa-solid fa-circle-plus"></i></Link>
                </div>
                <div className="main-index-bottom">
                    <table>
                        <thead>
                            <tr>
                                <th>Placa</th>
                                <th>Tipo</th>
                                <th>Modelo</th>
                                <th>Marca</th>
                                <th>Puestos</th>
                                <th>Mantenimiento</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td> {item.fichaTecnica.placa}</td>
                                        <td>{item.fichaTecnica.tipoVehiculo}</td>
                                        <td>{item.fichaTecnica.modelo}</td>
                                        <td>{item.fichaTecnica.marca}</td>
                                        <td>{item.fichaTecnica.cantPuestos}</td>
                                        <td>{item.fichaTecnica.ultimoMantenimiento.split("T")[0]}</td>
                                    </tr>
                                );
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Vehicle;
