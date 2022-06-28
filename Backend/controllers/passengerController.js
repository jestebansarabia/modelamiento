const db = require('../database/models');

const passenger = {
    all: (req, res) => {
        db.Pasajeros.findAll()
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
    ById: (req, res) => {
        db.Pasajeros.findAll({
            where: { "idViaje": req.params.id },
            include: [
                {
                    association: 'cliente',
                    include: [
                        {
                            association: "persona"
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
    store: async (req, res) => {
        db.Pasajeros.create(req.body)
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

module.exports = passenger;