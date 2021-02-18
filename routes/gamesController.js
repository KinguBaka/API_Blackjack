const express = require("express");
const router = express.Router();

const Games  = require("../models/gamesModel");

router.get("/", (req, res) => {
    Games.find({},(err, games) =>{
         if (!err) res.send(games);
         else console.log("Error to get data : " + err);
    }) 
});

router.get("/:id", (req, res) => {
    Games.findOne({_id : req.params.id} ,(err, games) =>{
         if (!err) res.send(games);
         else console.log("Error to get data : " + err);
    }) 
});

router.post("/", (req, res) =>{
    const newGames = new Games({
        result : req.body.result,
        meCards : req.body.meCards,
        bankCards : req.body.bankCards
    });
    newGames.save((err, games) =>{
        if (!err) res.send(games);
        else console.log("Error creating new data : " + err);
    })
});

module.exports = router