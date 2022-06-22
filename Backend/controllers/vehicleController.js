const db = require('../database/models');

const vehicle ={
    all: (req, res) => {
        db.Vehiculos.findAll()
        .then(data=>{
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
    store:async(req,res)=>{

        const fechaTecnica= await db.FichaTecnicas.create(req.body);
        db.Vehiculos.create({
            idFichaTecnica:fechaTecnica.placa
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

module.exports=vehicle;