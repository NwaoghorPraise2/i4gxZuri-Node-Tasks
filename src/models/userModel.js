const {Schema, model} = require('mongoose');

const userSchema = new Schema (
    {
        username: {
            type: String,
            required: true,
            minlenght: 3,
            maxlenght: 20,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            minlenght: 3,
            maxlenght: 20,
        },
        age: {
            type: Number,
            default: null,
        },
        isUser: {
        type: Boolean,
        default: true
        },
        isAdmin: {
            type: Boolean,
            default: false,
        }
    },
    {timestamps: true},
);

const userModel = model('users', userSchema);

module.exports = userModel;