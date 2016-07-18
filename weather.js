"use strict"

const request = require('request');

let options = { method: 'GET',
                   url: 'http://api.openweathermap.org/data/2.5/weather',
                    qs: { q: '',
                      APPID: '4fd8ab9649f81ad2e6e9a02464bc6c3f',
                      units: 'metric'}
              };

module.exports = (robot)=> {

  return robot.hear(/weather (.*)/i, (msg) => {

    options.qs.q = msg.match[1];
    request(options, (error, response, body) => {

      if (error) throw new Error(error);
      let condition = JSON.parse(body);
      let message = `*City:* ${condition.name}\n*Condition:* ${condition.weather[0].description}\n*Temperature:* ${condition.main.temp}ºC\n*Wind:* ${condition.wind.speed}Km/h`;
      return msg.send("This is the weather for " + msg.match[1] + "\n" + message);
    });
  });

};
