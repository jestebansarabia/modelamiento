import { Link, useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
const CreateTravel = () => {
    const [datos, setDatos] = useState({});
    const [drives, setDrives] = useState([]);
    const [routes, setRoutes] = useState([]);
    const messenger = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3030/drives')
            .then(response => response.json())
            .then(response => {
                if (response.ok) setDrives(response.data);
            })
            .catch(error => console.log(error));

        fetch('http://localhost:3030/routes')
            .then(response => response.json())
            .then(response => {
                if (response.ok) setRoutes(response.data);
            })
            .catch(error => console.log(error));
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setDatos({ ...datos, [name]: value });
    };


    const enviarData = () => {
        console.log("datos: ", datos);

        messenger.current.innerHTML = 'Cargando....';

        fetch('http://localhost:3030/travels/store', {
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
                    navigate('/travels');
                } else {
                    messenger.current.innerHTML = 'Error al registrar : ' + data.err;
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
                        <h1>Nuevo Viaje</h1>
                    </div>
                    <div className="from-down">
                        <div className="from-down-left">
                            <div className="from-down-input">
                                <div className="main-index-top add-between">
                                    <label htmlFor="nombre">Conductor <small>(placa - nombre)</small>: </label>
                                    <Link to='/drives/create'><i class="fa-solid fa-circle-plus small"></i></Link>
                                </div>
                                <select name="idTransportador" onChange={handleChange}>
                                    <option value='none' selected>Escoja Opcion</option>
                                    {drives?.map((item, i) => <option key={i} value={item.id}>{`${item.vehiculo.idFichaTecnica} - ${item.persona.nombre} ${item.persona.apellido}`}</option>)}

                                </select>
                            </div>
                        </div>
                        <div className="from-down-right">
                            <div className="from-down-input">
                                <div className="main-index-top add-between">
                                    <label htmlFor="nombre">Ruta <small>(Origen - Llegada (Hr))</small>: </label>
                                    <Link to='/routes/create'><i class="fa-solid fa-circle-plus small"></i></Link>
                                </div>
                                <select name="idRuta" onChange={handleChange}>
                                    <option value='none' selected>Escoja Opcion</option>
                                    {routes?.map((item, i) => <option key={i} value={item.id}>{`${item.ciudadOrigen} - ${item.ciudadDestino} Salida ${item.horaSalida}`}</option>)}

                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="from-down-input">
                        <label htmlFor="valor">Valor: </label>
                        <input type="number" name="valor"  onChange={handleChange} />
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

export default CreateTravel;
