module.exports = (sequelize, dataTypes) => {
    let alias = "Rutas";
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
        tiempoAproximado: {//horas
            type: dataTypes.DOUBLE
        }
    };
    let config = {
        tableName: "rutas",
        timestamps: false,
        deletedAt: false,
        paranoid: true
    };
    const Rutas = sequelize.define(alias, cols, config);

    Rutas.associate = function(models) {
        Rutas.hasMany(models.Viajes, {
            as: "Viaje",
            foreignKey: "idRuta"
        });
    }

    return Rutas;

}