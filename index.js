const express = require("express");
const { json } = require("express");
const flights = require("./controllers/flightController");
const models = require("./models/Flight");
const routes = require("./routes/flightRoute");
const {flightList} = require("./models/Flight");

const app = express();

app.use(json());

app.use("/", routes);



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

// add or book flight
let bookFlight = async (req, res) => {
    try {
        const { tittle , price} = await req.body;
        console.log(req.body);
        const newFlight = {
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

routes.get('/flights', getAllFlights)
    .post('/flights', bookFlight);

const port = process.env.PORT || 3100;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});