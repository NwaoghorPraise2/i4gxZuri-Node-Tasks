const express = require('express');
const {json, urlencoded} = require('express');
require('dotenv').config();
const connect = require('./config/database');
const userRoute = require('./router/todosRoutes');

const port = process.env.PORT || 2000; 

//Calling the Express Function
const app = express();

//Setting Middlewares
app.use(json());
app.use('/api', userRoute);

//Connecting Mongo DB
connect(process.env.ONLINE_DB);

//server
app.listen(port, () => {
    console.log(`server started on ${port}`);
});