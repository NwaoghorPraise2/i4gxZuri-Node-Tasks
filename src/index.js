const express = require('express');
const {json, urlencoded} = require('express');
const env = require('dotenv').config();
const connect = require('./config/database');
const userRoute = require('./router/userRoutes');

const app = express();

app.use(json());
app.use('/api', userRoute);


connect(process.env.ONLINE_DB);


const port = process.env.PORT || 2000; 


app.listen(port, () => {
    console.log(`server started on ${port}`);
});