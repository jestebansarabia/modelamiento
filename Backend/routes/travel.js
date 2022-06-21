const express = require('express');
const router = express.Router();

const travelController = require('../controllers/travelController');

router.get('/cityStart',travelController.cityStart);
router.get('/cityEnd',travelController.cityEnd);

router.get('/',travelController.getAllTravels);

module.exports = router;