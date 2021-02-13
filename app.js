const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const { start } = require("repl");
const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));

let myobject
fs.readFile("./object.json", "utf-8", (err, data) => {
    if (err) throw err;
    myobject = JSON.parse(data);
});

let players;
let playerId;
let round = 1;
let cardNumber;
let startCard;

app.get("/start", (req, res) => {
    res.render("start");
    round = 1;
});

app.post("/start", (req, res) => {
    players = parseInt(req.body.playersNumber);
    playerId = parseInt(req.body.playerId);
    startCard = parseInt(req.body.startCard) - 1;
    res.redirect("/game");
});


app.get("/game", (req, res) => {

    if (round == 1) {
        playerId = parseInt(playerId);
        let arrayIndex = parseInt(startCard - 1) + playerId;
        res.render("game", { card: myobject.list[arrayIndex] });
    } else if (round == 2) {
        toString()
        const final = cardNumber + players;
        res.render("game", { card: myobject.list[final - 1] });
    }

});

app.post("/game", (req, res) => {
    round = 2;
    cardNumber = parseInt(req.body.cardNumber);
    res.redirect("/game");
});

function toString() {
    console.log("  this is our toString")
    console.log(startCard + "  startcard");
    console.log(cardNumber + " card number");
    console.log(playerId + " playerId")
    console.log("--------------------------------------------------------------------")
}




app.listen(3000);