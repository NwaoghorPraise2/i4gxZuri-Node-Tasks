const {Schema, model} = require('mongoose');

const todosSchema = new Schema (
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    {timestamps: true},
);

const todosModel = model('todos', todosSchema);

module.exports = todosModel;