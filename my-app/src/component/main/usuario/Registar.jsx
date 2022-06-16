import React from 'react';
import { Link } from 'react-router-dom';

const Registar = () => {
    return (
        <main>
            <div className="from">
                <div className="from-top">
                    <h1>Registrar</h1>
                </div>
                <div className="from-down">
                    <div className="from-down-left">
                        <div className="from-down-input">
                            <label for="nombre">Nombre: </label>
                            <input type="text" name="nombre" id="nombre" placeholder="nombre" />
                        </div>
                        <div className="from-down-input">
                            <label for="apellido">Apellido: </label>
                            <input type="text" name="apellido" id="apellido" placeholder="apellido" />
                        </div>
                        <div className="from-down-input">
                            <label for="tipoDocumento">Tipo de Documento: </label>
                            <input type="text" name="tipoDocumento" id="tipoDocumento" placeholder="tipoDocumento" />
                        </div>
                        <div className="from-down-input">
                            <label for="documento"># Documento: </label>
                            <input type="number" name="documento" id="documento" placeholder="Documento" />
                        </div>
                    </div>
                    <div className="from-down-right">
                        <div className="from-down-input">
                            <label for="telefono"># Telefono: </label>
                            <input type="phone" name="telefono" id="telefono" placeholder="telefono" />
                        </div>
                        <div className="from-down-input">
                            <label for="email">Correo: </label>
                            <input type="email" name="email" id="email" placeholder="email" />
                        </div>
                        <div className="from-down-input">
                            <label for="password">Contraseña: </label>
                            <input type="password" name="password" id="password" />
                        </div>
                        <div className="from-down-input">
                            <label for="direccion">Direccion: </label>
                            <input type="text" name="direccion" id="emadireccionil" placeholder="direccion" />
                        </div>
                    </div>
                    <div className="from-down-button">
                        <button onclick="">Registar</button>
                    </div>

                    <div className="from-down-button">
                        <Link to="/">Ya tengo cuenta</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Registar;
