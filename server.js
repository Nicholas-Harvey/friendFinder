var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var existingCandidates = [
{
    name:"Randy",
    photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    },

    {
        name:"Adam",
        photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
            2,
            1,
            3,
            1,
            5,
            2,
            4,
            3,
            3,
            1
        }
      ];

      app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "home.html"));
      });

      app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/survey.html"));
      });

      app.get("/api/existingCandidates", function(req, res) {
        return res.json(characters);
      });
  