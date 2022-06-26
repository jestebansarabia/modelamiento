import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../partials/Header';
import Sidebar from '../../partials/Sidebar';

const Route = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/routes')
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
                    <h2>Rutas</h2>
                    <Link to='/routes/create'><i className="fa-solid fa-circle-plus"></i></Link>
                </div>
                <div className="main-index-bottom">
                    <table>
                        <thead>
                            <tr>
                                <th>Origen</th>
                                <th>Destino</th>
                                <th>Distancia <small>(Km)</small></th>
                                <th>Hora <small>(Hr)</small></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td> {item.ciudadOrigen}</td>
                                        <td>{item.ciudadDestino}</td>
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
