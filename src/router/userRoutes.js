const router = require('express').Router();
const controllers = require('../controllers/userController');


router.get('/', controllers.getAllUsers)

module.exports = router;