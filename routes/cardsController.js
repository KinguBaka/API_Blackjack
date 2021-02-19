const express = require("express");
const router = express.Router();

const Cards  = require("../models/cardsModel");

router.get("/", (req, res) => {
   Cards.find({},(err, cards) =>{
        if (!err) res.send(cards);
        else console.log("Error to get data : " + err);
   }) 
});

router.get("/:id", (req, res) => {
   Cards.find({_id : req.params.id},(err, cards) =>{
        if (!err) res.send(cards);
        else console.log("Error to get data : " + err);
   }) 
});

module.exports = router