const db = require('../database/models');

const driver ={
    all: (req, res) => {
        db.Trasportadores.findAll({
            include: [
                { association: "persona" },
                { association: "vehiculo" }
            ]
        })
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
        db.Trasportadores.create(req.body)
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

module.exports=driver;