const express = require('express');
const router = express.Router();

const passengerController=require("../controllers/passengerController");

router.get('/', passengerController.all);
router.get('/travels/:id', passengerController.ById);
router.post('/store',passengerController.store);

module.exports = router;