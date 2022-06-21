const db = require('../database/models');

const route ={
    store:(req,res)=>{
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