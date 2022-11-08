const express = require("express");
const { json } = require("express");
const flights = require("./controllers/flightController");
const models = require("./models/Flight");
const routes = require("./routes/flightRoute");
const {flightList} = require("./models/Flight");
const {v4: uuid} = require('uuid');

const app = express();

app.use(json());

app.use("/", routes);
app.use("/api", routes);

//get All Flights
let getAllFlights = async (req, res) => {
    try {
        const allFlights = flightList;
        res.status(200).json({
            message: 'All flights gotten',
            allFlights
        });
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
};

// get single flight
let getSingleFlight =  async (req, res) => {
    try {
        let id = await req.params.id;
        const getFlight = flightList.find((flight) => flight.id === id);
        res.status(200).json({
            message: 'Flight Found',
            getFlight
        });
    } catch (err) {
        res.json({
            message: err.message
        });
    }

}

// add or book flight
let bookFlight = async (req, res) => {
    try {
        const { tittle, price} = await req.body;
        // console.log(yes);
        const newFlight = {
            id: uuid(),
            tittle,
            time: new Date().toLocaleTimeString(),
            price,
            date: new Date().toLocaleDateString()
        };
        flightList.push(newFlight);
        res.status(201).json({
            message: 'Flight Created',
            newFlight
        });
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
};

//update flight
let updateFlight = async (req, res) => {
    try{
    let id = req.params.id;
    const getFlight = flightList.find((flight) => flight.id === id);
    const { tittle, price } = await req.body;
    getFlight.tittle = tittle;
    getFlight.price =price;
    getFlight.date = new Date().toLocaleDateString();
    getFlight.time = new Date().toLocaleTimeString();
    res.status(201).json(
        {
        message:'Flight Updated',
        getFlight
        }
    );
    } catch (err) {
    res.status(500).json({
        message : err.message
    });    
    }
};

//delete flight 
let deleteFlight = async (req, res) => {
    try{
        let id = await req.params.id;
        const getFlight = flightList.find((flight) => flight.id === id);
        flightList.splice(flightList.indexOf(getFlight), 1);
        res.status(200).json({
            message: 'Flight Deleted',
            getFlight
        });
    }catch(err){
    res.status(500).json({
        message: err.message
    });
    }
};
routes.get('/api', getAllFlights)
    .get('/api/:id', getSingleFlight)
    .delete('/api/:id', deleteFlight)
    .put('/api/:id', updateFlight)
    .post('/api', bookFlight);
    

const port = process.env.PORT || 3100;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});