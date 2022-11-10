const router = require('express').Router();
const controllers = require('../controllers/userController');


router
    .get('/', controllers.getAllUsers)
    .get('/:id', controllers.getSingleUSer)
    .post('/', controllers.createUser)
    .put('/:id', controllers.updateUser)
    .delete('/:id', controllers.deleteUser);
    
module.exports = router;