import { useRef, useState } from 'react';
import Header from '../../partials/Header';
import Sidebar from '../../partials/Sidebar';
import { useNavigate } from "react-router-dom"

const CreateRoute = () => {
    const [datos, setDatos] = useState({});
    const messenger = useRef();
    const navigate = useNavigate()

    const enviarData = () => {

        messenger.current.innerHTML = 'Cargando....';

        fetch('http://localhost:3030/route/store', {
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
                    navigate("/route");
                } else {
                    messenger.current.innerHTML = 'Error: ' + data.err;
                }
            })
            .catch(error => {
                messenger.current.innerHTML = 'Error al enviar los datos';
            });
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setDatos({ ...datos, [name]: value });
    }

    return (
        <>
            <Sidebar />
            <Header />
            <div className="main-index">
                <div className="from">
                    <div className="from-top">
                        <h1>Nueva Ruta</h1>
                    </div>
                    <div className="from-down">
                        <div className="from-down-left">
                            <div className="from-down-input">
                                <label htmlFor="ciudadOrigen">Ciudad Origen: </label>
                                <input type="text" name="ciudadOrigen" placeholder="Nombre" onChange={handleChange} />
                            </div>
                            <div className="from-down-input">
                                <label htmlFor="ciudadDestino">Ciudad Destino: </label>
                                <input type="text" name="ciudadDestino"placeholder="Nombre" onChange={handleChange} />
                            </div>
                        </div>
                        <div className="from-down-right">
                            <div className="from-down-input">
                                <label htmlFor="distancia">Distancia <small>(km)</small>: </label>
                                <input type="number" name="distancia"  onChange={handleChange} />
                            </div>
                            <div className="from-down-input">
                                <label htmlFor="horaSalida">Hora de Salida <small>(hr)</small>: </label>
                                <input type="time" name="horaSalida"  onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="from-down-input">
                        <label htmlFor="tiempoAproximado">Tiempo Aproximado <small>(min)</small>: </label>
                        <input type="number" name="tiempoAproximado" onChange={handleChange} />
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

export default CreateRoute;
