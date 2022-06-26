import React from 'react';

const Persona = ({ handleChange }) => {
    return (
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

            </div>
            <div className="from-down-right">
                <div className="from-down-input">
                    <label htmlFor="documento"># Documento: </label>
                    <input type="number" name="documento" id="documento" placeholder="Documento" onChange={handleChange} />
                </div>
                <div className="from-down-input">
                    <label htmlFor="telefono"># Telefono: </label>
                    <input type="phone" name="telefono" id="telefono" placeholder="telefono" onChange={handleChange} />
                </div>
                <div className="from-down-input">
                    <label htmlFor="direccion">Direccion: </label>
                    <input type="text" name="direccion" id="emadireccionil" placeholder="direccion" onChange={handleChange} />
                </div>
            </div>
        </div>
    );
}

export default Persona;
