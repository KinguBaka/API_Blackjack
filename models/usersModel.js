const mongoose = require("mongoose");
//const uniqueValidator = require("mongoose-unique-validator");

const UsersModel = mongoose.model(
    "Blackjack-API",
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true } 
    },
    "Users"
);

module.exports = { UsersModel };