import React from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const Index = () => {
    const email = useRef() 
    const password = useRef();
    const messenger = useRef();

    function enviarData(){
        const data = {
            email: email.value,
            password: password.value
        }
        
        messenger.current.innerHTML = 'Cargando....';
    
        fetch('http://localhost:3030/users/login', {
            mode: 'cors',
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        })
        .then(res => res.json())
        .then(data => {
                console.log("data: ",data);
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
                    <h1>Login</h1>
                </div>
                <div className="from-down">
                    <div className="from-down-input">
                        <label htmlFor="email">Correo: </label>
                        <input type="email" name="email" id="email" ref={email} placeholder="email" />
                    </div>
                    <div className="from-down-input">
                        <label htmlFor="password">Contraseña: </label>
                        <input type="password" name="password" id="password" ref={password}/>
                    </div>
                    <div className='from-down-messenger'>
                        <small ref={messenger}></small>
                    </div>
                    <div className="from-down-button">
                        <button onClick={enviarData}>Iniciar sesión</button>
                    </div>
                    <div className="from-down-button">
                        <Link to="/usuario/registar">Registrarme</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Index;
