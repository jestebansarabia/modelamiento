module.exports = (sequelize, dataTypes) => {
    let alias = "Pasajeros";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idCliente: {
            type: dataTypes.INTEGER
        },
        idViaje: {
            type: dataTypes.INTEGER
        },
        silla:{
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: "pasajeros",
        timestamps: false,
        deletedAt: false,
        paranoid: true
    };
    const Pasajeros = sequelize.define(alias, cols, config);

    Pasajeros.associate = function(models) {
        Pasajeros.belongsTo(models.Clientes, {
            as: "cliente",
            foreignKey: "idCliente"
        });
        Pasajeros.belongsTo(models.Viajes, {
            as: "viaje",
            foreignKey: "idViaje"
        });
    }

    return Pasajeros;

}