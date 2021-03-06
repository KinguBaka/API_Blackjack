const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config()

mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@blackjack.dmkdu.mongodb.net/Blackjack-API?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (!err) console.log(" MongoDB connected");
        else console.log("Connection error : " + err);
    }
);