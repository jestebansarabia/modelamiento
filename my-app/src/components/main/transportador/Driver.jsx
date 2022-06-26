import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Header from '../../partials/Header';
import Sidebar from '../../partials/Sidebar';

const Driver = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/drives')
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
                    <h2>Conductores</h2>
                    <Link to='/drives/create'><i class="fa-solid fa-circle-plus"></i></Link>
                </div>
                <div className="main-index-bottom">
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Documento</th>
                                <th>Vehiculo</th>
                                <th>Experiencia</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td> {item?.persona?.nombre}</td>
                                        <td>{item?.persona?.apellido}</td>
                                        <td>{item?.persona?.documento}</td>
                                        <td>{item?.vehiculo?.idFichaTecnica}</td>
                                        <td>{item?.experiencia}</td>
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

export default Driver;
