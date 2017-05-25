var direction = require('google-maps-direction');
const getDirection = (req,res) => {
  let search = {}
  for(key in req.query ) search[key] = req.query[key];

  direction(search)
  .then((result)=>{
    let start_address = result.routes[0].legs[0].start_address;
    let departure_time = result.routes[0].legs[0].departure_time.text;
    let end_address = result.routes[0].legs[0].end_address;
    let arrival_time = result.routes[0].legs[0].arrival_time.text;
    let distance = result.routes[0].legs[0].distance.text;
    let duration = result.routes[0].legs[0].duration.text;

    let dir =
    `AWAL : ${start_address} (${departure_time})\nAKHIR : ${end_address} (${arrival_time})\nJarak : ${distance}\nDurasi : ${duration}\n`;
    let steps = '-----------------------------------------------------------------------------------------\n';
    result.routes[0].legs[0].steps.forEach((step)=>{
      steps += `${step.travel_mode} - ${step.html_instructions} (${step.distance.text} - ${step.duration.text})\n`;
    })
    dir += steps;
    res.send(dir);

  });
}

module.exports = {getDirection}

// http://maps.googleapis.com/maps/api/directions/json?origin=-6.2187662,106.7519429&destination=-6.2243333333,106.8425000000&mode=driving&avoid=tolls&units=metrtics