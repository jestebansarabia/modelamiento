import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
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
                    {data?.map((item, i) => {
                        return (
                            <div className="card" key={i}>
                                <div className="card-header">
                                    {item.ciudadOrigen} - {item.ciudadDestino}
                                </div>
                                <div className="card-body">
                                    {`${item.distancia} Km`}
                                </div>
                                <div className="card-footer">
                                    {`${item.horaSalida} Horas`}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Route;
