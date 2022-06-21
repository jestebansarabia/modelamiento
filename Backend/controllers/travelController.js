const travel = {
    getAllTravels: (req, res) => {
        //origen - destino
        console.log("query: ",req.query);
        /*
        db.Viajes.findAll({

        })
            .then(travels => {
                res.json({
                    ok: false,
                    err: err
                });
            })
            .catch(err => {
                res.json({
                    ok: false,
                    err: err
                });
            });
            */
    }
}
module.exports = travel;