const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require('./routes/api/items');



const app = express();

//BodyParser

app.use(bodyParser.json())

// DB Config

const dataBase = require('./config/keys').mongoURI;

// Connect to Mongo

mongoose.connect(dataBase, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('MongoDB Connected..')
})
.catch((err) => {
    console.log(err)
})

app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => {console.log(`Server started on port ${port}`)});