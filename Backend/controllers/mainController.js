const prueba ={
    title:"hola",
    abraham:"sarabia"
}

const mainController ={
    index:(req, res)=>{
        res.status(200).json({prueba});
    }

}
module.exports = mainController;