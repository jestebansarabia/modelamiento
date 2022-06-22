import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Header from '../../partials/Header';
import Sidebar from '../../partials/Sidebar';

const Driver = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/drive')
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
                    <Link to='/drive/create'><i class="fa-solid fa-circle-plus"></i></Link>
                </div>
                <div className="main-index-bottom">
                    {data?.map((item, i) => {
                        return (
                            <div className="card" key={i}>
                                <div className="card-header">
                                    {item?.nombre} - {item.placa}
                                </div>
                                <div className="card-body">
                                    {`${item.experencia} de experiencia `}
                                </div>
                                <div className="card-footer">
                                    {`${item.edad} años`}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Driver;
