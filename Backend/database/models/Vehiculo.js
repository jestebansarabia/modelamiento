module.exports = (sequelize, dataTypes) => {
    let alias = "vehiculo";
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
        tableName: "vehiculo",
        timestamps: false,
        deletedAt: false,
        paranoid: true
    };
    const vehiculo = sequelize.define(alias, cols, config);
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

    return vehiculo;

}