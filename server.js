
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || "8000";

require("./models/dbConfig");

const cardsRoutes = require("./routes/cardsController");
const gamesRoutes = require("./routes/gamesController");


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json())

app.use("/cards", cardsRoutes); 
app.use("/games", gamesRoutes);


app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});