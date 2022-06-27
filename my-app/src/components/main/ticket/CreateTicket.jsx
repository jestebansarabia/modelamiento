import { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../partials/Header';
import Sidebar from '../../partials/Sidebar';
import '../../../asset/css/ticket.css';

const CreateTicket = () => {

    const [datos, setDatos] = useState({});
    const [travel, setTravel] = useState({});
    const [chair, setchair] = useState('No seleccionada');
    const [clients, setClients] = useState([]);
    const messenger = useRef();
    const navigate = useNavigate()
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3030/travels/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data.ok) {
                    setTravel(data.data);
                    setDatos({ idViaje: data.data.id })
                }
            })
            .catch(() => {
                messenger.current.innerHTML = 'Error al enviar los datos';
            });
        fetch(`http://localhost:3030/clients`)
            .then(res => res.json())
            .then(data => {
                if (data.ok) setClients(data.data);
            })
            .catch(() => {
                messenger.current.innerHTML = 'Error al enviar los datos';
            });
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setDatos({ ...datos, [name]: value });
    };

    const selected = (event) => {
        event.target.classList.remove('open');
        event.target.classList.add('closed');
        const silla=parseInt(event.target.innerText);
        setchair(silla);
        setDatos({...datos, silla})
    }

    const enviarData = () => {
        console.log("datos: ", datos);

        messenger.current.innerHTML = 'Cargando....';
        // realizar lo de viaje api
        fetch('http://localhost:3030/vehicle/store', {
            mode: 'cors',
            method: 'POST', // or 'PUT'
            body: JSON.stringify(datos), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.ok) {
                    navigate('/vehicle');
                } else {
                    messenger.current.innerHTML = 'Error al registrar: ' + data.err;
                }
            })
            .catch(error => {
                console.log('error: ', error);
                messenger.current.innerHTML = 'Error al enviar los datos';
            });
    }

    return (
        <>
            <Sidebar />
            <Header />
            <div className="main-index">
                <div className="from">
                    <div className="from-top">
                        <h1>Ticket</h1>
                    </div>
                    <div className="main-index-top add">
                        <h3>{`${travel?.ruta?.ciudadOrigen} - ${travel?.ruta?.ciudadDestino}`}</h3>
                    </div>
                    <div className="from-down">
                        <div className="from-down-left">
                            <div className="from-down-input">
                                <label>Conductor: </label>
                                <p>{`${travel?.trasportador?.persona?.nombre} ${travel?.trasportador?.persona?.apellido}`}</p>
                            </div>
                            <div className="from-down-input">
                                <label>Vehiculo: </label>
                                <p>{`${travel?.trasportador?.vehiculo?.fichaTecnica?.tipoVehiculo} ${travel?.trasportador?.vehiculo?.fichaTecnica?.marca} ${travel?.trasportador?.vehiculo?.idFichaTecnica}`}</p>
                            </div>
                            <div className="from-down-input">
                                <label >Hora de Salida: </label>
                                <p>{`${travel?.ruta?.horaSalida} `}<small>(Hr)</small></p>
                            </div>
                            <div className="from-down-input">
                                <label>Hora de Llegada: </label>
                                <p>{`${travel?.ruta?.tiempoAproximado} `}<small>(Hr)</small></p>
                            </div>
                            <div className="from-down-input">
                                <label >Cliente: </label>
                                <select name="idCliente" onChange={handleChange}>
                                    <option value='none' selected>Escoja Opcion</option>
                                    {clients?.map((item, i) => <option key={i} value={item?.id}>{`${item?.persona?.documento} - ${item?.persona?.nombre} ${item?.persona?.apellido}`}</option>)}

                                </select>
                            </div>
                        </div>
                        <div className="from-down-right">
                            <div className="from-down-input">
                                <label >Silla: </label>
                                <p>{chair}</p>
                            </div>
                            <div class="chairs">
                                <div class="chair-front">

                                    <div class="chair closed">
                                        <strong>Drive</strong>
                                    </div>
                                    <div class="chair open" onClick={selected}>
                                        <strong>1</strong>
                                    </div>

                                </div>

                                <div class="chair-back">

                                    <div class="chair open" onClick={selected}><strong>2</strong></div>
                                    <div class="chair open" onClick={selected}><strong>3</strong></div>
                                    <div class="chair open" onClick={selected}><strong>4</strong></div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='from-down-messenger'>
                        <small ref={messenger}></small>
                    </div>
                    <div className="from-down-button">
                        <button onClick={enviarData}>Guardar</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateTicket;
