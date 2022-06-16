module.exports = (sequelize, dataTypes) => {
    let alias = "pasajeros";
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
    };
    let config = {
        tableName: "pasajeros",
        timestamps: false,
        deletedAt: false,
        paranoid: true
    };
    const pasajeros = sequelize.define(alias, cols, config);

    pasajeros.associate = function(models) {
        pasajeros.belongsTo(models.clientes, {
            as: "cliente",
            foreignKey: "idCliente"
        });
        pasajeros.belongsTo(models.viajes, {
            as: "viaje",
            foreignKey: "idViaje"
        });
    }

    return pasajeros;

}