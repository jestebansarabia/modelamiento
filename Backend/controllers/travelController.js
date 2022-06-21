const db = require('../database/models');

const getCityOne = (data,key) => {
    let cityStart = [];
    data?.forEach(item => {
        if (!cityStart.includes(item[key])) {
            cityStart.push(item[key]);
        }
    })
    return cityStart;
}

const travel = {
    getAllTravels: (req, res) => {
        const ciudadOrigen = req.query.ciudadOrigen;
        const ciudadDestino = req.query.ciudadDestino;
        db.Rutas.findAll({
            where:{
                "ciudadOrigen":ciudadOrigen,
                "ciudadDestino":ciudadDestino
            }
            })
            .then(data => {
                res.json({
                    ok: true,
                    data
                });
            })
            .catch(err => {
                res.json({
                    ok: false,
                    err
                });
            });
    },
    cityStart: (req, res) => {
        db.Rutas.findAll()
            .then(data => {
                res.json({
                    ok: true,
                    data: getCityOne(data,'ciudadOrigen')
                });
            })
            .catch(err => {
                res.json({
                    ok: false,
                    err
                });
            });
    },
    cityEnd: (req, res) => {
        db.Rutas.findAll({
            where:{"ciudadOrigen":req.query.ciudadOrigen}
            })
            .then(data => {
                res.json({
                    ok: true,
                    data:getCityOne(data,'ciudadDestino')
                });
            })
            .catch(err => {
                res.json({
                    ok: false,
                    err
                });
            });
    }
}
module.exports = travel;