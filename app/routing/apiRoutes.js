var friends = require("../data/friends.js");

module.exports = function(app){

	app.get("/api/friends", function(req, res){

		res.json(friends);
	});

	app.post("/api/friends", function(req, res){

		var friendMatch ={

			name : "",
			pic : ""
		};

		var userData = req.body;
		var userName = userData.name;
		var userPhoto = userData.photo;
		var userScores = userData.scores;

		var bestScore = 5;
		var userTotal = 0;
		var friendTotal = 0;

		for(var i=0; i<friends.length; i++){

			for(var n=0; n<friends[i].scores.length; n++){

						userTotal += parseInt(userScores[n]);
						friendTotal += parseInt(friends[i].scores[n]);
	
			}

			scoreDiff = Math.abs(parseInt(userTotal) - parseInt(friendTotal));

			if(scoreDiff <= bestScore){

				friendMatch.name = friends[i].name;
				friendMatch.pic = friends[i].photo;

			}
				
		}

		friends.push(req.body);

		res.json(friendMatch);


	});
}