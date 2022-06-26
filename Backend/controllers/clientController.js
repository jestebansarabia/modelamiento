const db = require('../database/models');

const driver = {
    all: (req, res) => {
        db.Clientes.findAll(
            {
                include: [
                    { association: "persona" },
                ]
            }
        )
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
        const body = req.body;
        const existPerson = await db.Personas.findOne({ where: { correo: body.correo, } });

        if (existPerson) {
            res.json({
                ok: false,
                err: 'Usuario ya existe'
            });
        } else {
            const persona = await db.Personas.create(body);
            db.Clientes.create({
                idPersona: persona.id,
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
}

module.exports = driver;