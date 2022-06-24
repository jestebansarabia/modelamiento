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
        timestamps: false,
        deletedAt: false,
        paranoid: true
    };
    const FichaTecnicas = sequelize.define(alias, cols, config);
    FichaTecnicas.associate = function (models) {
        FichaTecnicas.belongsTo(models.Vehiculos, {
            as: "vehiculo",
            foreignKey: "idFichaTecnica"
        });
    }
    return FichaTecnicas;

}