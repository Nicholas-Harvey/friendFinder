var cTable = require("console.table") 
console.log("                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ");
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
                        name:"Pretie",
                        photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
                        scores:[4, 2, 1, 5, 2, 3, 1, 5, 4, 1]
                        },
                        {
                            name:"Tuna",
                            photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
                            scores:[5, 3, 4, 5, 3, 2, 5, 4, 1, 3]
                            }
          ];

          console.table(existingCandidates)

          app.get("/api/existingCandidates/:newCandidate", function(req, res) {
            var newCandidate = req.params.existingCandidates;
          
            console.log(newCandidate);