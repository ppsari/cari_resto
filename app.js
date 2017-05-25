const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const passport = require('passport');

const index = require('./routes/index');
const weather = require('./routes/weather');
<<<<<<< HEAD
const lirik = require('./routes/lirik');
var restaurants = require('./routes/restaurants');
=======
const restaurants = require('./routes/restaurants');
const user = require('./routes/user');
const twitter = require('./routes/twitter');

mongoose.connect('mongodb://localhost/cari_resto')

passport.serializeUser(function(user, cb) {
  cb(null, user);
});
passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
>>>>>>> 4322a202f8acdba11a7db97db917b25810a01bfc

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', index);
//app.use('/restaurants/', weather);
app.use('/restaurants', restaurants);
<<<<<<< HEAD
app.use('/lirik', lirik);
=======
app.use('/user', user);
app.use('/twitter', twitter);

>>>>>>> 4322a202f8acdba11a7db97db917b25810a01bfc
app.listen(3000, () => console.log("Listening on port 3000"));
