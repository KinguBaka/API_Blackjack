const mongoose = require("mongoose");

const CardsSchema = mongoose.Schema({
    name : {type : String, required: true },
    value: {type : Number, required: true },
    color: {type : String, required: true },
    sign: {type : String, required: true }
});

module.exports = mongoose.model("Cards", CardsSchema);