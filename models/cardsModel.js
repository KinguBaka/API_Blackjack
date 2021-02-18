const mongoose = require("mongoose");

const CardsModel = mongoose.model(
    "Blackjack-API", 
    {
        name : {type : String, required: true },
        value: {type : Number, required: true },
        color: {type : String, required: true },
        sign: {type : String, required: true }
    },
    "Cards"
);

module.exports = { CardsModel };