import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../partials/Header';
import Sidebar from '../../partials/Sidebar';

const Ticket = () => {

    const [data, setData] = useState([]);
    const [citysStart, setCitysStart] = useState([]);
    const [citysEnd, setCitysEnd] = useState([]);
    const [selectCitysStart, setSelectCitysStart] = useState('none');
    const [selectCitysEnd, setSelectCitysEnd] = useState('none');

    useEffect(() => {

        fetch('http://localhost:3030/travels')
            .then(res => res.json())
            .then(data => {
                if (data.ok) setData(data.data);
            })
            .catch(error => {
                console.log('error: ', error);
            });

        fetch('http://localhost:3030/travels/cityStart')
            .then(res => res.json())
            .then(data => {
                if (data.ok) setCitysStart(data.data);
            })
            .catch(error => {
                console.log('error: ', error);
            });
    }, []);

    const cityEnd = (city) => {
        fetch(`http://localhost:3030/travels/cityEnd?ciudadOrigen=${city}`)
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

    const getTravels = () => {
        if (selectCitysStart !== 'none' && selectCitysEnd !== 'none') {
            fetch(`http://localhost:3030/travels/filter?ciudadOrigen=${selectCitysStart}&ciudadDestino=${selectCitysEnd}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.ok) setData(data.data);
                })
                .catch(error => {
                    console.log('error: ', error);
                });
        } else {
            window.alert("Seleccione ciudad Origen y Destino");
        }
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
            <Header />
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
                    <table>
                        <thead>
                            <tr>
                                <th>Ciudad Origen</th>
                                <th>Ciudad Destino</th>
                                <th>Hora de Salida</th>
                                <th>Conductor</th>
                                <th>Valor</th>
                                <th>Disponibles</th>
                                <th>Opcion</th>
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
                                        <td>{item?.valor}</td>
                                        <td>{`${item?.trasportador?.vehiculo?.fichaTecnica?.cantPuestos}`}</td>
                                        <td>{item?.trasportador?.vehiculo?.fichaTecnica?.cantPuestos !== 0 ? <Link to={`ticket/create/${item.id}`}><i class="fa-solid fa-check small"></i></Link> : <i class="fa-solid fa-x small"></i>}</td>
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

export default Ticket;
