const todos = require('../models/todosModel');

    //get todos
    let getTodos = async (req, res) => {
        try {
            let todo = await todos.find();
            if (todo.length === 0) {
                return res.status(404).json({
                    success:false,
                    message: 'No todos not found'
                });
            };
            res.status(200).json({
                success: true,
                message: 'Todos Found',
                todo
            });
        } catch (err) {
            res.status(500).json({
                success: false,
                message: 'Internal Server Error',
                error: err.message
            });
        }
    }
    
    //get single todo
    let getTodo = async (req, res) => {
        try {
            let id = {_id: req.params.id};
            let todo = await todos.findOne(id);
                if (!todo) return res.status(404).json({
                    success: false,
                    message: 'todo not found'
                });
                res.status(200).json({
                    success: true,
                    message: 'todo Found',
                    todo
                });
        } catch (err) {
            res.status(500).json({
                success: false,
                message: 'Internal Error',
                error: err.message
            });
        }
    };
    
    //create todo
    let createTodo = async (req, res) => {
        try {
            let todo = await req.body;
            let createdTodo = await todos.create(todo);
            if (!createdTodo) return res.status(404).json({
                message: false,
                message: 'Todo Creation failed'
            })
            return res.status(201).json({
                success: true,
                message: 'todo Creation Successful',
                todo: createdTodo
            })
        } catch (err) {
            res.status(500).json({
                success: false,
                message: 'internal matters',
                error: err.message
            });
        }
    };
    
    //update todo
    let updateTodo = async (req, res) => {
        try {
            let id = {_id: req.params.id}
            let todo = await req.body;
            let updateTodo = await todos.findByIdAndUpdate(id, todo, {new: true});
            
        if (!updateTodo) return res.status(500).json({
            success: false,
            message: 'Todo not updated'
        });
        
        return res.status(200).json({
            success: true,
            message: 'Todo Updated',
            updateTodo
        });
        } catch (err) {
            res.status(500).json({
                success: false,
                message: 'Internal Error',
                error: err.body
            });            
        }
    };
    
    //Delete Todo
    let deleteTodo = async (req, res) => {
        try {
            let id = {_id: req.params.id};
            let deleteTodo = await todos.findOneAndDelete(id);
            
            if (!deleteTodo) return res.status(400).json({
                success: false,
                message: 'Todo not deleted'
            });
            
            return res.status(200).json({
                success: true,
                message: "Todo Successfully Deleted",
                deletedTodo: deleteTodo
            });
        } catch (err) {
            res.status(500).json({
                success: false,
                message: 'Internal Errors',
                error: err.message
            })
        }
    }
    
    //Export Modules
    module.exports = {
        getTodos,
        getTodo,
        createTodo,
        updateTodo,
        deleteTodo
    };