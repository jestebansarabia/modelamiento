import { Link, useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
const CreateDriver = () => {

    const [datos, setDatos] = useState({});
    const [persons, setPersons] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const messenger = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3030/users')
            .then(response => response.json())
            .then(response => {
                if (response.ok) setPersons(response.data);
            })
            .catch(error => console.log(error));

        fetch('http://localhost:3030/vehicles')
            .then(response => response.json())
            .then(response => {
                if (response.ok) setVehicles(response.data);
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

        fetch('http://localhost:3030/drives/store', {
            mode: 'cors',
            method: 'POST', // or 'PUT'
            body: JSON.stringify({...datos,cv:"none"}), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.ok) {
                    navigate('/drives');
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
                        <h1>Nuevo Conductor</h1>
                    </div>
                    <div className="from-down">
                        <div className="from-down-left">
                            <div className="from-down-input">
                                <div className="main-index-top add-between">
                                    <label htmlFor="nombre">Usuario: </label>
                                    <Link to='/clients/create'><i class="fa-solid fa-circle-plus small"></i></Link>
                                </div>
                                <select name="idPersona"  onChange={handleChange}>
                                    <option value='none' selected>Escoja Opcion</option>
                                    {persons?.map((item, i) => <option key={i} value={item.id}>{`${item.documento} - ${item.nombre} ${item.apellido}`}</option>)}

                                </select>
                            </div>
                            <div className="from-down-input">
                                <label htmlFor="experiencia">Experiencia: </label>
                                <input type="number" name="experiencia" onChange={handleChange} />
                            </div>
                        </div>
                        <div className="from-down-right">
                            <div className="from-down-input">
                                <div className="main-index-top add-between">
                                    <label htmlFor="nombre">Vehiculo: </label>
                                    <Link to='/vehicles/create'><i class="fa-solid fa-circle-plus small"></i></Link>
                                </div>
                                <select name="idVehiculo" onChange={handleChange}>
                                    <option value='none' selected>Escoja Opcion</option>
                                    {vehicles?.map((item, i) => <option key={i} value={item.id}>{`${item.fichaTecnica.tipoVehiculo} - ${item.idFichaTecnica}`}</option>)}

                                </select>
                            </div>
                            <div className="from-down-input">
                                <label htmlFor="edad">edad: </label>
                                <input type="number" name="edad" onChange={handleChange} />
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

export default CreateDriver;
