import { useEffect, useState } from 'react';

import Header from '../../partials/Header';
import Sidebar from '../../partials/Sidebar';

const Index = () => {
    const [route, setRoute] = useState([]);
    const [citysStart, setCitysStart] = useState([]);
    const [citysEnd, setCitysEnd] = useState([]);
    const [selectCitysStart, setSelectCitysStart] = useState('none');
    const [selectCitysEnd, setSelectCitysEnd] = useState('none');
    const [user, setUser] = useState({});

    useEffect(() => {

        if (!localStorage.getItem('user')) {
            window.location = '/usuario/login';
        }

        setUser(JSON.parse(localStorage.getItem('user')));

        fetch('http://localhost:3030/travel/cityStart')
            .then(res => res.json())
            .then(data => {
                if (data.ok) setCitysStart(data.data);
            })
            .catch(error => {
                console.log('error: ', error);
            });
    }, []);

    const cityEnd = (city) => {
        fetch(`http://localhost:3030/travel/cityEnd?ciudadOrigen=${city}`)
            .then(res => res.json())
            .then(data => {
                if (data.ok) {
                    setCitysEnd(data.data);
                    setSelectCitysEnd(data.data[0])
                }
            })
            .catch(error => {
                console.log('error: ', error);
            });
    }

    const getTravels = (props) => {
        fetch(`http://localhost:3030/travel?ciudadOrigen=${selectCitysStart}&ciudadDestino=${selectCitysEnd}`)
            .then(res => res.json())
            .then(data => {
                if (data.ok) setRoute(data);
            })
            .catch(error => {
                console.log('error: ', error);
            });
    }

    const onValueSelectCitysStart = (event) => {
        setSelectCitysStart(event.target.value);
        if (event.target.value != 'none') cityEnd(event.target.value);
    }

    const onValueSelectCitysEnd = (event) => {
        setSelectCitysEnd(event.target.value);
    }

    return (
        <>
            <Sidebar />
            <Header nombre={user?.nombre} />
            <div className="main-index">
                <div className="main-index-top">
                    <select name="ciudadOrigen" id="" onChange={onValueSelectCitysStart}>
                        <option value='none' selected>Escoja Opcion</option>
                        {citysStart?.map((item, i) => <option key={i} value={item}>{item}</option>)}

                    </select>
                    <select name="ciudadDestino" id="" onChange={onValueSelectCitysEnd}>
                        {citysEnd?.map((item, i) => <option key={i} value={item}>{item}</option>)}
                    </select>
                    <i class="fa-solid fa-magnifying-glass" onClick={getTravels}></i>
                </div>
                <div className="main-index-bottom">
                    {route.map((item, i) =>
                        <div className="card">
                            <div className="card-header">
                            </div>
                            <div className="card-body">
                                tiempos
                            </div>
                            <div className="card-footer">
                                precio
                            </div>
                        </div>
                    )}
                    <div className="card">
                        <div className="card-header">
                            nombre
                        </div>
                        <div className="card-body">
                            tiempos
                        </div>
                        <div className="card-footer">
                            precio
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
