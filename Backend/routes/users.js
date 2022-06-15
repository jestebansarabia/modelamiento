var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');

router.post('/login',userController.login);
router.post('/store',userController.store);
router.put('/update/:id',userController.update);

module.exports = router;
