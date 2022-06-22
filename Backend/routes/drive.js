const express = require('express');
const router = express.Router();

const driverController=require("../controllers/driverController");

router.get('/', driverController.all);
router.post('/store',driverController.store);

module.exports = router;