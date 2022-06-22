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
    /*

    Vehiculo.associate = function(models) {
        Vehiculo.belongsTo(models.FichaTecnica, {
            as: "vehiculos",
            foreignKey: "idFichaTenica"
        });
        Vehiculo.hasMany(models.Trasportadores, {
            as: "Trasportadores",
            foreignKey: "idVehiculo"
        });
    }
    */

    return Vehiculos;

}