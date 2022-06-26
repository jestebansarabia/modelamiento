const express = require('express');
const router = express.Router();

const clientController=require("../controllers/clientController");

router.get('/', clientController.all);
router.post('/store',clientController.store);

module.exports = router;