var request = require('request');

module.exports = function(robot){
	robot.hear(/show me (.*)/i, function(msg){
		var textEntry = msg.match[1];
		request('https://maps.googleapis.com/maps/api/place/textsearch/json?&location=51.518565,-0.125537&radius=10000&query=' + textEntry + '&key=AIzaSyAFCkSucNqbLFOZoJBEkmbmb2_7TBING5g', function (error, response, body){
			var mapResult = JSON.parse(body);
			var resultNameLocation = mapResult.results[0].name + mapResult.results[0].formatted_address;
			//need to do a for loop, array .join()

			// for (var i = 0; i < message.length, i ++){
			// 	return msg.send("Here are some " + textEntry + ": " + resultName[i]);
			// };

			return msg.send(resultNameLocation);

			// return msg.send(mapResult);
				// for (var key in mapResult){
				// 	if (mapResult.hasOwnProperty(key)){
				// 		console.log(mapResult[key]);
				// 	}
				// }

				// return msg.send("Here are some " + textEntry + ": " + mapResult.results[0].name);


		});
	});
};

// JSON.stringify(textEntry);


