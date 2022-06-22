import { Link, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';

const CreateVehicle = () => {

    const [datos, setDatos] = useState({});
    const messenger = useRef();
    const navigate = useNavigate()

    const handleChange = (event) => {
        const { name, value } = event.target;
        setDatos({ ...datos, [name]: value });
    };

    const enviarData = () => {
        console.log("datos: ", datos);

        messenger.current.innerHTML = 'Cargando....';

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
                        <h1>Nuevo Vehiculo</h1>
                    </div>
                    <div className="from-down">
                        <div className="from-down-left">
                            <div className="from-down-input">
                                <label htmlFor="placa">Placa: </label>
                                <input type="text" name="placa" placeholder="Placa" onChange={handleChange} />
                            </div>
                            <div className="from-down-input">
                                <label htmlFor="tipoVehiculo">Tipo de Vehiculo: </label>
                                <input type="text" name="tipoVehiculo" placeholder="Tipo de Vehiculo" onChange={handleChange} />
                            </div>
                            <div className="from-down-input">
                                <label htmlFor="modelo">Modelo: </label>
                                <input type="text" name="modelo" placeholder="Modelo" onChange={handleChange} />
                            </div>
                        </div>
                        <div className="from-down-right">
                            <div className="from-down-input">
                                <label htmlFor="marca">Marca: </label>
                                <input type="text" name="marca"  placeholder="Marca" onChange={handleChange} />
                            </div>
                            <div className="from-down-input">
                                <label htmlFor="cantPuestos">Cantiad de puestos: </label>
                                <input type="number" name="cantPuestos"  placeholder="Cantiad de puestos" onChange={handleChange} />
                            </div>
                            <div className="from-down-input">
                                <label htmlFor="ultimoMantenimiento">Ultimo Mantenimiento: </label>
                                <input type="date" name="ultimoMantenimiento" onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="from-down-input">
                        <label htmlFor="documentos">Documentos: </label>
                        <input type="text" name="documentos" placeholder="Documentos" onChange={handleChange} />
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

export default CreateVehicle;
