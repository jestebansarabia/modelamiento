const express = require('express');
const router = express.Router();

const travelController = require('../controllers/travelController');

router.get('/cityStart',travelController.cityStart);
router.get('/cityEnd',travelController.cityEnd);

router.get('/filter',travelController.getAllTravels);

router.get('/',travelController.all);
router.get('/:id',travelController.getId);
router.post('/store',travelController.store);

module.exports = router;