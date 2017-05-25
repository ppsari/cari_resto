const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const index = require('./routes/index');
var restaurants = require('./routes/restaurants');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', index);
app.use('/restaurants', restaurants);

app.listen(3000, () => console.log("Listening on port 3000"));
