module.exports = (sequelize, dataTypes) => {
    let alias = "viajes";
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
    const viajes = sequelize.define(alias, cols, config);

    viajes.associate = function(models) {
        viajes.belongsTo(models.rutas, {
            as: "ruta",
            foreignKey: "idRuta"
        });
        viajes.belongsTo(models.trasportadores, {
            as: "trasportador",
            foreignKey: "idTransportador"
        });
        viajes.hasMany(models.pasajeros, {
            as: "pasajeros",
            foreignKey: "idViaje"
        });
    }

    return viajes;

}