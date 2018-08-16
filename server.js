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
    scores:[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
    },
    {
        name:"Adam",
        photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        scores:[2, 1, 3, 1, 5, 2, 4, 3, 3, 1]
        },
        {
            name:"Christian",
            photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
            scores:[3, 2, 4, 4, 5, 1, 2, 5, 4, 3]
            },
            {
                name:"Collin",
                photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
                scores:[1, 5, 2, 3, 1, 3, 4, 2, 1, 5]
                },
                {
                    name:"Mike",
                    photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
                    scores:[4, 2, 1, 5, 2, 3, 1, 5, 4, 1]
                    },
                    {
                        name:"Tom",
                        photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
                        scores:[5, 3, 4, 5, 3, 2, 5, 4, 1, 3]
                        },
                        {
                        name:"Jeff",
                        photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
                        scores:[3, 5, 5, 4, 2, 3, 4, 1, 4, 2]
                        },
                        { 
                        name:"Jon",
                        photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
                        scores:[5, 2, 1, 3, 3, 3, 3, 2, 3, 1]
                        }
      ];

      app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "public/home.html"));
      });

      app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "public/survey.html"));
      });

      app.get("/api/existingCandidates", function(req, res) {
        return res.json(existingCandidates);
      });

      app.post("/api/existingCandidates", function(req, res){
          var newFriend = {
              name: req.body.name,
              photo: req.body.photo,
              scores: req.body.scores.map(function(scores){
                  return parseInt(scores)
              })
          }
          console.log(newFriend);

        var totalMatches = [];
        for (let i =0; i < existingCandidates.length; i++){
            // console.log("this is running")
            var matchScore = [];
            for (let y = 0; y < newFriend.scores.length; y++){
                matchScore.push(Math.abs(newFriend.scores[y] - existingCandidates[i].scores[y]))
            
            }
              
            
            totalMatches.push(matchScore)

        }

            var chosenFriendArray = [];
            

console.log(totalMatches);

const reducer = (accumulator, currentValue) => accumulator + currentValue;
for (let i = 0; i < totalMatches.length; i++){
    chosenFriendArray.push(totalMatches[i].reduce(reducer))
}

console.log(chosenFriendArray, "this is our chosen friend array")



var bestFriendIndex = Math.min.apply(null, chosenFriendArray);
console.log(bestFriendIndex, "This is our best friend index");




var existingCandidateIndex = chosenFriendArray.indexOf(bestFriendIndex);
console.log(existingCandidateIndex, "this is the existingCandidateIndex");

let bestFriend = existingCandidates[existingCandidateIndex];
console.log(bestFriend, "this is our bestFriend");

existingCandidates.push(newFriend);

          res.json(bestFriend);
      })
      app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
      });


      