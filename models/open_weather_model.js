var weather = require('openweather-apis');

function weatherNow(req, res) {
  let location = req.params.koor; // get koor
  weather.setLang('en');

  // set city by name
  weather.setCity(location);
  // or set the coordinates (latitude,longitude)
  // weather.setCoordinate(50.0467656, 20.0048731);
  // or set city by ID (recommended by OpenWeatherMap)
  // weather.setCityId(4367872);

  // 'metric'  'internal'  'imperial'
  weather.setUnits('metric');
  weather.setAPPID("46d361034d293ed223d46ada2bcb116d");

  // get the Temperature
  weather.getTemperature(function(err, temp){
    if (err) {
      res.send(err.message);
    } else {
      getResult(temp, res);
    }
  });
}

function getResult(temp, res) {
  // get the Description of the weather condition
  weather.getDescription(function(err, desc) {
    if (err) {
      res.send(err.message);
    } else {
      let pattern = /(rain)/g;
      if (pattern.test(desc)) {
        res.send(`Temperature : ${temp} \xB0C\nWeather: ${desc}\nDon't forget to bring an umbrella..`);
      } else {
        res.send(`Temperature : ${temp} \xB0C\nWeather: ${desc}`);
      }
    }
  });

}
module.exports = {
  weatherNow
}
