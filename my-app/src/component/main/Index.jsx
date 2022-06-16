import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
    return (
        <main>
            <div className="from">
                <div className="from-top">
                    <h1>Login</h1>
                </div>
                <div className="from-down">
                    <div className="from-down-input">
                        <label for="email">Correo: </label>
                        <input type="email" name="email" id="email" placeholder="email" />
                    </div>
                    <div className="from-down-input">
                        <label for="password">Contraseña: </label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <div className="from-down-button">
                        <button onclick="">Iniciar sesión</button>
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
