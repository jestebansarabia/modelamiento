module.exports = (sequelize, dataTypes) => {
    let alias = "FichaTecnicas";
    let cols = {
        placa: {
            type: dataTypes.STRING,
            primaryKey: true
        },
        tipoVehiculo: {
            type: dataTypes.STRING
        },
        modelo: {
            type: dataTypes.INTEGER
        },
        marca: {
            type: dataTypes.STRING
        },
        cantPuestos: {
            type: dataTypes.INTEGER
        },
        ultimoMantenimiento: {
            type: dataTypes.DATE
        },
        documentos: {
            type: dataTypes.STRING
        },
    };
    let config = {
        tableName: "fichaTecnicas",
        timestamps: false
    };
    const FichaTecnicas = sequelize.define(alias, cols, config);
    FichaTecnicas.associate = function (models) {
        FichaTecnicas.hasMany(models.Vehiculos, {
            as: "vehiculos",
            foreignKey: "idFichaTecnica"
        });
    }
    return FichaTecnicas;

}