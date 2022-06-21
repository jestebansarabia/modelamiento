const db = require('../database/models');

const driver ={
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