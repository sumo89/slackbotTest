var request = require('request');

module.exports = function(robot){
	robot.hear(/show me (.*)/i, function(msg){
		var textEntry = msg.match[1];
		request('https://maps.googleapis.com/maps/api/place/textsearch/json?&location=51.518565,-0.125537&radius=10000&query=' + textEntry + '&key=AIzaSyAFCkSucNqbLFOZoJBEkmbmb2_7TBING5g', function (error, response, body){
			
			var mapResult = JSON.parse(body);
			var MapResultName = [];
			for (var i = 0; i < mapResult.results.length; i++){
				 MapResultName.push ("\n" + mapResult.results[i].name + " - " + mapResult.results[i].formatted_address);
			}
			return msg.send("Here are some " + textEntry + ": " + MapResultName);

		


		});
	});
};


