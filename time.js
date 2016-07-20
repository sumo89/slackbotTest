// "use strict"

// var request = require('request');

// var worldTime  = {
// 	method: 'GET',
// 	uri: 'http://worldclockapi.com/api/json/utc/now'
// };


// module.exports = (robot)=> {

// 	robot.hear(/time (.*)/i, (msg) {
// 		var theTime = JSON.parse(body);
// 		var message = worldTime.currentDateTime;
// 		return msg.send("This is the time " + message);
// 	};  

// };


// var request = require('request');
// request('http://worldclockapi.com/api/json/utc/now', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     var time = JSON.parse(body);
//   }
// });

// var timeOptions = {
// 	method: 'GET',
// 	url: 'http://worldclockapi.com/api/json/utc/now'
// };

// time.currentDateTime();

// module.exports = function(robot){

// 	robot.hear(/time (.*)/i, function(msg){

// 		request(timeOptions, (error, response, body){
// 			var time = JSON.parse(body);
// 			var message = time.currentDateTime();
// 			return msg.send("This is the time " + message);
// 	});
// };

var request = require('request');
module.exports = function(robot){
	robot.hear(/what is the time/i, function(msg){
		request('http://worldclockapi.com/api/json/utc/now', function (error, response, body){
			var data = JSON.parse(body);
			var time = new Date(data.currentDateTime);
			var message = time.getHours() + ':' + time.getMinutes();
			return msg.send("This is the time " + message);
		});
	});
	robot.hear(/what is the day/i, function(msg){
		request('http://worldclockapi.com/api/json/utc/now', function (error, response, body){
			var time = JSON.parse(body);
			var message = time.dayOfTheWeek;
			return msg.send("Today is " + message);
		});

	});
};

// request('http://worldclockapi.com/api/json/utc/now', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage. 
//   }
// })



