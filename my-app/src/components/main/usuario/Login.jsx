import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';

const Index = () => {
    const [datos, setDatos] = useState({});
    const messenger = useRef();

    const enviarData=()=> {

        console.log(datos); 
        messenger.current.innerHTML = 'Cargando....';

        fetch('http://localhost:3030/users/login', {
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
                if(data.ok){
                    localStorage.setItem('user',JSON.stringify(data.persona));
                    window.location = '/';
                }else{
                    messenger.current.innerHTML = 'Error: '+data.err;
                }
            })
            .catch(error => {
                console.log('error: ', error);
                messenger.current.innerHTML = 'Error al enviar los datos';
            });
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setDatos({ ...datos, [name]: value });
    }

    return (
        <main>
            <div className="from">
                <div className="from-top">
                    <h1>Login</h1>
                </div>
                <div className="from-down">
                    <div className="from-down-input">
                        <label htmlFor="email">Correo: </label>
                        <input type="email" name="correo" onChange={handleChange} placeholder="email" />
                    </div>
                    <div className="from-down-input">
                        <label htmlFor="password">Contraseña: </label>
                        <input type="password" name="password" onChange={handleChange} />
                    </div>
                    <div className='from-down-messenger'>
                        <small ref={messenger}></small>
                    </div>
                    <div className="from-down-button">
                        <button onClick={enviarData}>Iniciar sesión</button>
                    </div>
                    <div className="from-down-button">
                        <Link to="/usuario/registrar">Registrarme</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Index;
