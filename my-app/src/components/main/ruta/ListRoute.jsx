import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../partials/Header';
import Sidebar from '../../partials/Sidebar';

const Route = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/route')
            .then(response => response.json())
            .then(response => {
                console.log(response.data);
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
                    <h2>Rutas</h2>
                    <Link to='/route/create'><i class="fa-solid fa-circle-plus"></i></Link>
                </div>
                <div className="main-index-bottom">
                    <table>
                        <thead>
                            <tr>
                                <th>Origen - Destino</th>
                                <th>Distancia <small>(Km)</small></th>
                                <th>Hora <small>(Hr)</small></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((item, i) => {
                                return (
                                    <tr>
                                        <td> {item.ciudadOrigen} - {item.ciudadDestino}</td>
                                        <td>{item.distancia}</td>
                                        <td>{item.horaSalida}</td>
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

export default Route;
