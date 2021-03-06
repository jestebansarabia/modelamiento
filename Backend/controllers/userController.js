const db = require('../database/models');

const user = {
    all: (req, res) => {
        db.Personas.findAll()
        .then(data=>{
            res.json({
                ok: true,
                data:data.map(item=>{
                    return({
                        id: item.id,
                        nombre:item.nombre,
                        apellido:item.apellido,
                        documento:item.documento
                    });
                })
            });
        })
        .catch(err => {
            res.json({
                ok: false,
                err: 'Error al buscar Personas'
            });
        });
    },
    login: (req, res) => {
        const body = req.body;
        console.log(body);
        db.Personas.findOne({
            where: {
                correo: body.correo,
            }
        }).then(persona => {
            if (persona) {
                if (persona.password === body.password) {
                    res.json({
                        ok: true,
                        persona: persona
                    });
                } else {
                    res.json({
                        ok: false,
                        err: 'Credenciales incorrecta'
                    });
                }
            } else {
                res.json({
                    ok: false,
                    err: 'Usuario no existe'
                });
            }
        })

        /*.catch(err => {
            res.json({
                ok: false,
                err: 'Error al buscar usuario'
            });
        });
        */
    },
    store: (req, res) => {
        const body = req.body;

        db.Personas.findOne({
            where: {
                correo: body.correo,
            }
        }).then(persona => {
            if (persona) {
                res.json({
                    ok: false,
                    err: 'Usuario ya existe'
                });
            } else {
                db.Personas.create(body)
                    .then(persona => {
                        res.status(200).json({
                            ok: true,
                            persona: persona
                        });
                    }).catch(err => {
                        console.log("Error: ", err);
                        res.json({
                            ok: false,
                            err: 'Error al crear persona'
                        });
                    });
            }
        }).catch(err => {
            res.json({
                ok: false,
                err: 'Error al buscar usuario '
            });
        });
    },
    update: (req, res) => {
        const id = req.params.id;
        const body = req.body;

        db.Personas.update({
            nombre: body.nombre,
            apellido: body.apellido,
            tipoDocumento: body.tipoDocumento,
            documento: body.documento,
            telefono: body.telefono,
            direccion: body.direccion
        }, {
            where: {
                id: id
            }
        }).then(persona => {
            res.json({
                ok: true,
                persona: persona
            });
        }).catch(err => {
            res.json({
                ok: false,
                err: 'Error al actualizar persona'
            });
        });
    }


}
module.exports = user;