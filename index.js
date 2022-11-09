const express = require('express');
const env = require('dotenv').config();


app = express();

app.get('/', (req, res) => {
    res.status(200).json({
    message: 'todo server ready'
    });
});

const port = process.env.PORT || 2000; 


app.listen(port, () => {
    console.log(`server started on ${port}`);
});