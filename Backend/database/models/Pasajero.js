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
            as: "Cliente",
            foreignKey: "idCliente"
        });
        Pasajeros.belongsTo(models.Viajes, {
            as: "Viaje",
            foreignKey: "idViaje"
        });
    }

    return Pasajeros;

}