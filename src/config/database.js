const mongoose = require('mongoose');
const {config} = require(`dotenv`);

config();
let connect = async (uri) => {
    try {
        mongoose.connect(uri || process.env.MONGO_DB);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.log(err.message);
    }
};

module.exports = connect;