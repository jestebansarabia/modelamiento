const db = require('../database/models');

const route ={
    all: (req, res) => {
        db.Rutas.findAll()
        .then(data=>{
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
    store:(req,res)=>{
        console.log(req.body);
        db.Rutas.create(req.body)
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

module.exports=route;