import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../partials/Header';
import Sidebar from '../../partials/Sidebar';

const Travel = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/travels')
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
                <h2>Viajes</h2>
                <Link to='/travels/create'><i class="fa-solid fa-circle-plus"></i></Link>
            </div>
            <div className="main-index-bottom">
                <table>
                    <thead>
                        <tr>
                            <th>Ciudad Origen</th>
                            <th>Ciudad Destino</th>
                            <th>Hora de Salida</th>
                            <th>Conductor</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td> {item?.ruta?.ciudadOrigen}</td>
                                    <td>{item?.ruta?.ciudadDestino}</td>
                                    <td>{item?.ruta?.horaSalida}</td>
                                    <td>{`${item?.trasportador?.persona?.nombre} ${item?.trasportador?.persona?.apellido}`}</td>
                                    <td> {item?.valor}</td>
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

export default Travel;
