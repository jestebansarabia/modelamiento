module.exports = (sequelize, dataTypes) => {
    let alias = "clientes";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idPersona: {
            type: dataTypes.INTEGER
        },
    };
    let config = {
        tableName: "clientes",
        timestamps: false,
        deletedAt: false,
        paranoid: true
    };
    const clientes = sequelize.define(alias, cols, config);

    clientes.associate = function(models) {
        clientes.belongsTo(models.personas, {
            as: "personas",
            foreignKey: "idPersona"
        });
        clientes.hasMany(models.pasajeros, {
            as: "pasajeros",
            foreignKey: "idCliente"
        });
    }

    return clientes;

}