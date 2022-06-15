module.exports = (sequelize, dataTypes) => {
    let alias = "rutas";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ciudadOrigen: {
            type: dataTypes.STRING
        },
        ciudadDestino: {
            type: dataTypes.STRING
        },
        distancia: {
            type: dataTypes.DOUBLE
        },
        horaSalida: {
            type: dataTypes.TIME
        },
        tiempoAproximado: {
            type: dataTypes.DOUBLE
        },
    };
    let config = {
        tableName: "rutas",
        timestamps: false,
        deletedAt: false,
        paranoid: true
    };
    const rutas = sequelize.define(alias, cols, config);

    rutas.associate = function(models) {
        rutas.hasMany(models.viajes, {
            as: "viaje",
            foreignKey: "idRuta"
        });
    }

    return rutas;

}