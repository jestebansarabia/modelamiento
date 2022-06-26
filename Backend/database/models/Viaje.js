module.exports = (sequelize, dataTypes) => {
    let alias = "Viajes";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idTransportador: {
            type: dataTypes.INTEGER
        },
        idRuta: {
            type: dataTypes.INTEGER
        },
        valor:{
            type: dataTypes.DOUBLE
        }
    };
    let config = {
        tableName: "viajes",
        timestamps: false,
        deletedAt: false,
        paranoid: true
    };
    const Viajes = sequelize.define(alias, cols, config);

    Viajes.associate = function(models) {
        Viajes.belongsTo(models.Rutas, {
            as: "ruta",
            foreignKey: "idRuta"
        });
        Viajes.belongsTo(models.Trasportadores, {
            as: "trasportador",
            foreignKey: "idTransportador"
        });
        Viajes.hasMany(models.Pasajeros, {
            as: "pasajeros",
            foreignKey: "idViaje"
        });
    }

    return Viajes;

}