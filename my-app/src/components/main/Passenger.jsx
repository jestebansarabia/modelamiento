import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../partials/Header';
import Sidebar from '../partials/Sidebar';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import RoutingMachine from './RoutingMachine';
import '../../asset/css/passengers.css';
//import { ejemplo } from '../../asset/js/map.js';

const Passenger = () => {
    const [datos, setDatos] = useState({});
    const [coordenadas, setCoordenadas] = useState([]);
    const [index, setindex] = useState(0);
    const [passenger, setPassenger] = useState([]);
    const [locationOrigen, setLocationOrigen] = useState([]);
    const [locationDestino, setLocationDestino] = useState([]);
    const messenger = useRef();
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3030/travels/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data.ok) {
                    setDatos(data.data);
                    fetch(`https://nominatim.openstreetmap.org/search?q=Colombia+${data?.data?.ruta?.ciudadOrigen}&format=geojson`)
                        .then(res => res.json())
                        .then(data => {
                            console.log("Origen: ", data?.features[0]?.geometry?.coordinates);
                            setLocationOrigen(data?.features[0]?.geometry?.coordinates);
                        })
                        .catch(() => {
                            messenger.current.innerHTML = 'Error al trael los datos de la api';
                        });
                    fetch(`https://nominatim.openstreetmap.org/search?q=Colombia+${data?.data?.ruta?.ciudadDestino}&format=geojson`)
                        .then(res => res.json())
                        .then(data => {
                            console.log("destino: ", data?.features[0]?.geometry?.coordinates);
                            setLocationDestino(data?.features[0]?.geometry?.coordinates);
                        })
                        .catch(() => {
                            messenger.current.innerHTML = 'Error al trael los datos de la api';
                        });
                }
            })
            .catch(() => {
                messenger.current.innerHTML = 'Error al enviar los datos';
            });

        fetch(`http://localhost:3030/passengers/travels/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data.ok) setPassenger(data.data);
            })
            .catch(() => {
                messenger.current.innerHTML = 'Error al enviar los datos';
            });
    }, []);

    /*
    const runCoordenas =()=>{
        setTimeout((runCoordenas)=>setindex(index+1),2000);
        setindex(0);
        
    }
    */

    return (
        <>
            <Sidebar />
            <Header />
            <div className="main-index">
                <div className="from">
                    <div className="main-index-top add" Style={'margin-bottom:20px'}>
                        <h1>Detalle Viaje</h1>
                        <i className="fa-solid fa-play" onClick={() => index < coordenadas.length - 11 ? setindex(index + 10) : setindex(0)}></i>
                    </div>
                    <div className="main-index-top add">
                        <h3>{`${datos?.ruta?.ciudadOrigen} - ${datos?.ruta?.ciudadDestino}`}</h3>
                    </div>
                    <div className="main-index-top add">
                        <small>{datos?.ruta?.horaSalida}</small>
                    </div>
                    <div className="from-down">
                        <div className="from-down-left">
                            <div className="from-down-input">
                                <label>Conductor: </label>
                                <p>{`${datos?.trasportador?.persona?.nombre} ${datos?.trasportador?.persona?.apellido}`}</p>
                            </div>
                            <div className="from-down-input">
                                <label>Vehiculo: </label>
                                <p>{`${datos?.trasportador?.vehiculo?.fichaTecnica?.tipoVehiculo} ${datos?.trasportador?.vehiculo?.fichaTecnica?.marca} ${datos?.trasportador?.vehiculo?.idFichaTecnica}`}</p>
                            </div>
                            <div className="from-down-input">
                                <label>Hora de Llegada: </label>
                                <p>{`${datos?.ruta?.tiempoAproximado} `}<small>(Hr)</small></p>
                            </div>
                            <div className="from-down-input">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Pasajero</th>
                                            <th>Silla</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {passenger.length > 0 ? passenger?.map((item, i) => {
                                            return (
                                                <tr key={i}>
                                                    <td> {`${item?.cliente?.persona?.nombre} ${item?.cliente?.persona?.apellido}`}</td>
                                                    <td>{item?.silla}</td>
                                                </tr>
                                            );
                                        }) : <tr>{'No hay Pasajeros'}</tr>}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="from-down-right">
                            <div className="map">
                                <label>Mapa </label>
                                {locationOrigen.length > 0 && locationDestino.length > 0 ? <MapContainer center={[6.00304, -74.48776]} zoom={5}>
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker position={[locationOrigen[1], locationOrigen[0]]}>
                                        <Popup>
                                            {datos?.ruta?.ciudadOrigen} <br /> Origen
                                        </Popup>
                                    </Marker>
                                    {coordenadas.length > 0 ? <Marker position={[coordenadas[index]?.lat, coordenadas[index]?.lng]}>
                                        <Popup>
                                            {datos?.ruta?.ciudadDestino} <br /> Destino
                                        </Popup>
                                    </Marker> : ''}
                                    <Marker position={[locationDestino[1], locationDestino[0]]}>
                                        <Popup>
                                            {datos?.ruta?.ciudadDestino} <br /> Destino
                                        </Popup>
                                    </Marker>
                                    {coordenadas.length === 0 ? <RoutingMachine
                                        origen={[locationOrigen[1], locationOrigen[0]]}
                                        destino={[locationDestino[1], locationDestino[0]]}
                                        setCoordenadas={setCoordenadas}
                                    /> : ''}
                                    </MapContainer> : ''}
                            </div>

                        </div>
                    </div>
                    <div className='from-down-messenger'>
                        <small ref={messenger}></small>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Passenger;
