const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000;

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());

//Routes
app.get('/', (req, res) => {
    res.send("Hello world");
});

//Connect to DB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("DB connected")
        app.listen(PORT, () => {
            console.log(`server running on port${PORT}`)
        });
    })
    .catch((err) => { console.log(err) })
