const express = require('express');
const env = require('dotenv').config();
const connect = require('./config/database');

connect(process.env.ONLINE_DB);

const app = express();
const port = process.env.PORT || 2000; 

app.get('/', (req, res) => {
    res.status(200).json({
    message: 'todo server ready'
    });
});

app.listen(port, () => {
    console.log(`server started on ${port}`);
});