const express = require("express");
const router = express.Router();

const { CardsModel }  = require("../models/cardsModel");

router.get("/", (req, res) => {
   CardsModel.find({},(err, cards) =>{
        if (!err) res.send(cards);
        else console.log("Error to get data : " + err);
   }) 
});

module.exports = router