const {Schema, model} = require('mongoose');

const userSchema = new Schema ({
    username: {
    type: string,
    required: true,
    minlenght: 3,
    maxlenght: 20,
    },
    email: {
    type: string,
    required: true,
    unique: true,
    minlenght: 3,
    maxlenght: 20,
    }
});