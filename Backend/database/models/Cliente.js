module.exports = (sequelize, dataTypes) => {
    let alias = "Clientes";
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
        tableName: "Clientes",
        timestamps: false,
        deletedAt: false,
        paranoid: true
    };
    const Clientes = sequelize.define(alias, cols, config);

    Clientes.associate = function(models) {
        Clientes.belongsTo(models.Personas, {
            as: "Personas",
            foreignKey: "idPersona"
        });
        Clientes.hasMany(models.Pasajeros, {
            as: "Pasajeros",
            foreignKey: "idCliente"
        });
    }

    return Clientes;

}