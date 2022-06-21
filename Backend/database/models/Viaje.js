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
            as: "Ruta",
            foreignKey: "idRuta"
        });
        Viajes.belongsTo(models.Trasportadores, {
            as: "Trasportador",
            foreignKey: "idTransportador"
        });
        Viajes.hasMany(models.Pasajeros, {
            as: "Pasajeros",
            foreignKey: "idViaje"
        });
    }

    return Viajes;

}