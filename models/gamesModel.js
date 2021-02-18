const mongoose = require("mongoose");

const GamesModel = mongoose.model(
    "Blackjack-API", 
    {   
        //userId: { type: String, required: false },
        date : {type : Date, default: Date.now },
        result : {type : String, required: true },
        meCards : {type : Object, required: true },
        bankCards : {type : Object, required: true }
    },
    "GamesHistory"
);

module.exports = { GamesModel };