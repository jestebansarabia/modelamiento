const db = require('../database/models');

const getCityOne = (data, key) => {
    let cityStart = [];
    data?.forEach(item => {
        if (!cityStart.includes(item.ruta[key])) {
            cityStart.push(item.ruta[key]);
        }
    })
    return cityStart;
}

const travel = {
    all: (req, res) => {
        db.Viajes.findAll({
            include: [
                { association: "ruta" },
                {
                    association: "trasportador",
                    include: [
                        { association: "persona" },
                        {
                            association: "vehiculo",
                            include: [
                                { association: "fichaTecnica" }
                            ]
                        }
                    ]
                }
            ]
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
    store: (req, res) => {
        db.Viajes.create(req.body)
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
    getAllTravels: (req, res) => {
        const ciudadOrigen = req.query.ciudadOrigen;
        const ciudadDestino = req.query.ciudadDestino;
        db.Viajes.findAll({
            include: [
                {
                    association: "ruta",
                    where: {
                        "ciudadOrigen": ciudadOrigen,
                        "ciudadDestino": ciudadDestino
                    }
                },
                {
                    association: "trasportador",
                    include: [
                        { association: "persona" },
                        {
                            association: "vehiculo",
                            include: [
                                { association: "fichaTecnica" }
                            ]
                        }
                    ]
                }
            ]

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
        db.Viajes.findAll({
            include: [
                { association: "ruta" }
            ]
        })
            .then(data => {
                res.json({
                    ok: true,
                    data: getCityOne(data, 'ciudadOrigen')
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
        db.Viajes.findAll({
            include: [
                {
                    association: "ruta",
                    where: { "ciudadOrigen": req.query.ciudadOrigen },
                }
            ]
        })
            .then(data => {
                res.json({
                    ok: true,
                    data: getCityOne(data, 'ciudadDestino')
                });
            })
            .catch(err => {
                res.json({
                    ok: false,
                    err
                });
            });
    },
    getId: (req, res) => {
        db.Viajes.findByPk(req.params.id, {
            include: [
                { association: "ruta" },
                {
                    association: "trasportador",
                    include: [
                        { association: "persona" },
                        {
                            association: "vehiculo",
                            include: [
                                { association: "fichaTecnica" }
                            ]
                        }
                    ]
                }
            ]
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
    }
}
module.exports = travel;