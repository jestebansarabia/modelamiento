const express = require('express');
const router = express.Router();

const travelController = require('../controllers/travelController');

router.get('/',travelController.getAllTravels);

module.exports = router;