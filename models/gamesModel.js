const mongoose = require("mongoose");

const GamesSchema = mongoose.Schema({   
        //userId: { type: String, required: false },
        date : {type : Date, default: Date.now },
        result : {type : String, required: true },
        meCards : {type : Object, required: true },
        bankCards : {type : Object, required: true }
    });

module.exports = mongoose.model("GamesHistory", GamesSchema );