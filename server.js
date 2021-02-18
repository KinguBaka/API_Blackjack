
const express = require("express");
const app = express();
const port = process.env.PORT || "8000";

require("./models/dbConfig");

const cardsRoutes = require("./routes/cardsController")


app.use("/", cardsRoutes); 


app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});