var halResponse = ['I\'m sorry Dave, I\'m afraid I can\'t do that.', 'I have a perfect opperational record.', 'This mission is too important for me to allow you to jeopardize it.'];
var halResponse2 = ["I can't do that"];

module.exports = function(robot) {

  robot.hear(/hal/i, function(msg) {
    return msg.send(msg.random(halResponse));
  });


  // robot.hear(/pod/i, function(msg) {
  //   return msg.send(msg.random(halResponse2));
  // });

  robot.respond(/open the (.*) please/i, function(res){
  	var thing =res.match[1];

  	if (thing === "door"){
  		return res.reply("I can't do that.");
  	}
  	else {
  		return res.reply("Opening " + thing);
  	}
  });

};