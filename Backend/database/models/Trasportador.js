module.exports = (sequelize, dataTypes) => {
    let alias = "Trasportadores";
    let cols = {
        placa: {
            type: dataTypes.INTEGER,
            primaryKey: true
        },
        idPersona: {
            type: dataTypes.INTEGER
        },
        idVehiculo: {
            type: dataTypes.INTEGER
        },
        experiencia: {
            type: dataTypes.INTEGER
        },
        cv: {
            type: dataTypes.STRING
        },
        edad: {
            type: dataTypes.INTEGER
        },
    };
    let config = {
        tableName: "trasportadores",
        timestamps: false,
        deletedAt: false,
        paranoid: true
    };
    const Trasportadores = sequelize.define(alias, cols, config);
    /*

    Trasportadores.associate = function(models) {
        Trasportadores.belongsTo(models.Vehiculos, {
            as: "Vehiculos",
            foreignKey: "idVehiculo"
        });
        Trasportadores.belongsTo(models.Personas, {
            as: "Personas",
            foreignKey: "idPersona"
        });
        Trasportadores.hasMany(models.viajes, {
            as: "viajes",
            foreignKey: "idTrasportador"
        });
    }
    */

    return Trasportadores;

}