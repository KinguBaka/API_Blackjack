
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || "8000";

require("./models/dbConfig");

const cardsRoutes = require("./routes/cardsController");
const gamesRoutes = require("./routes/gamesController");

app.use(bodyParser.json())

app.use("/cards", cardsRoutes); 
app.use("/games", gamesRoutes);


app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});