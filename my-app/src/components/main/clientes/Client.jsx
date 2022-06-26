import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../partials/Header';
import Sidebar from '../../partials/Sidebar';

const Person = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/clients')
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
                    <h2>Cliente</h2>
                    <Link to='/clients/create'><i className="fa-solid fa-circle-plus"></i></Link>
                </div>
                <div className="main-index-bottom">
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Tipo</th>
                                <th>Documento </th>
                                <th>Telefono </th>
                                <th>Correo </th>
                                <th>direccion </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td> {item?.persona?.nombre}</td>
                                        <td>{item?.persona?.apellido}</td>
                                        <td>{item?.persona?.tipoDocumento}</td>
                                        <td>{item?.persona?.documento}</td>
                                        <td>{item?.persona?.telefono}</td>
                                        <td>{item?.persona?.correo}</td>
                                        <td><small>{item?.persona?.direccion}</small></td>
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

export default Person;
