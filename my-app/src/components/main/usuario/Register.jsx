import { Link,useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';

const Registar = () => {

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

        fetch('http://localhost:3030/users/store', {
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
                    navigate('/usuarios/login');
                } else {
                    messenger.current.innerHTML = 'Error al registrar el usuario: ' + data.err;
                }
            })
            .catch(error => {
                console.log('error: ', error);
                messenger.current.innerHTML = 'Error al enviar los datos';
            });
    }

    return (
        <main>
            <div className="from">
                <div className="from-top">
                    <h1>Registrar</h1>
                </div>
                <div className="from-down">
                    <div className="from-down-left">
                        <div className="from-down-input">
                            <label htmlFor="nombre">Nombre: </label>
                            <input type="text" name="nombre" id="nombre" placeholder="nombre" onChange={handleChange} />
                        </div>
                        <div className="from-down-input">
                            <label htmlFor="apellido">Apellido: </label>
                            <input type="text" name="apellido" id="apellido" placeholder="apellido" onChange={handleChange} />
                        </div>
                        <div className="from-down-input">
                            <label htmlFor="tipoDocumento">Tipo de Documento: </label>
                            <input type="text" name="tipoDocumento" id="tipoDocumento" placeholder="tipoDocumento" onChange={handleChange} />
                        </div>
                        <div className="from-down-input">
                            <label htmlFor="documento"># Documento: </label>
                            <input type="number" name="documento" id="documento" placeholder="Documento" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="from-down-right">
                        <div className="from-down-input">
                            <label htmlFor="telefono"># Telefono: </label>
                            <input type="phone" name="telefono" id="telefono" placeholder="telefono" onChange={handleChange} />
                        </div>
                        <div className="from-down-input">
                            <label htmlFor="email">Correo: </label>
                            <input type="email" name="correo" id="email" placeholder="email" onChange={handleChange} />
                        </div>
                        <div className="from-down-input">
                            <label htmlFor="password">Contraseña: </label>
                            <input type="password" name="password" id="password" onChange={handleChange} />
                        </div>
                        <div className="from-down-input">
                            <label htmlFor="direccion">Direccion: </label>
                            <input type="text" name="direccion" id="emadireccionil" placeholder="direccion" onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <div className='from-down-messenger'>
                    <small ref={messenger}></small>
                </div>
                <div className="from-down-button">
                    <button onClick={enviarData}>Registar</button>
                </div>

                <div className="from-down-button">
                    <Link to="/usuario/login">Ya tengo cuenta</Link>
                </div>

            </div>
        </main>
    );
}

export default Registar;
