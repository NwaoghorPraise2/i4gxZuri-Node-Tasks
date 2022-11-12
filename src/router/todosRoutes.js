const router = require('express').Router();
const controllers = require('../controllers/todosController');


router
    .get('/', controllers.getTodos)
    .get('/:id', controllers.getTodo)
    .post('/', controllers.createTodo)
    .put('/:id', controllers.updateTodo)
    .delete('/:id', controllers.deleteTodo);
    
module.exports = router;