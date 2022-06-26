const db = require('../database/models');

const driver = {
    all: (req, res) => {
        db.Clientes.findAll()
            .then(data => {
                res.json({
                    ok: true,
                    data
                });
            })/*
        .catch(err => {
            res.json({
                ok: false,
                err
            });
        });
        */
    },
    store: (req, res) => {
        db.Clientes.create(req.body)
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

module.exports = driver;