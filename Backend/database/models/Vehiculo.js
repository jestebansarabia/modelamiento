module.exports = (sequelize, dataTypes) => {
    let alias = "Vehiculos";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idFichaTecnica: {
            type: dataTypes.STRING
        },
    };
    let config = {
        tableName: "vehiculos",
        timestamps: false,
        deletedAt: false,
        paranoid: true
    };
    const Vehiculos = sequelize.define(alias, cols, config);

    Vehiculos.associate = function(models) {
        Vehiculos.belongsTo(models.FichaTecnicas, {
            as: "fichaTecnica",
            foreignKey: "idFichaTecnica"
        });
        Vehiculos.hasMany(models.Trasportadores, {
            as: "Trasportadores",
            foreignKey: "idVehiculo"
        });
    }

    return Vehiculos;

}