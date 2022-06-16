module.exports = (sequelize, dataTypes) => {
    let alias = "personas";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        },
        tipoDocumento: {
            type: dataTypes.STRING
        },
        documento: {
            type: dataTypes.INTEGER
        },
        telefono: {
            type: dataTypes.INTEGER
        },
        correo:{
            type: dataTypes.STRING
        },
        password:{
            type: dataTypes.STRING
        },
        direccion:{
            type: dataTypes.STRING
        }

    };
    let config = {
        tableName: "personas",
        timestamps: false,
        deletedAt: false,
        paranoid: true
    };
    const personas = sequelize.define(alias, cols, config);
    /*

    Personas.associate = function(models) {

        Personas.hasMany(models.Cliente, {
            as: "Cliente",
            foreignKey: "idPersona"
        });

        Personas.hasMany(models.Trasportadores, {
            as: "Trasportadores",
            foreignKey: "idPersona"
        });
    }
    */

    return personas;

}