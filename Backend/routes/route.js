const express = require('express');
const router = express.Router();

const routeController=require("../controllers/routeController");

router.post('/store',routeController.store);

module.exports = router;