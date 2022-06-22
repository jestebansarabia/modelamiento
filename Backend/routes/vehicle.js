const express = require('express');
const router = express.Router();

const vehicleController=require("../controllers/vehicleController");

router.get('/', vehicleController.all);
router.post('/store',vehicleController.store);

module.exports = router;