const passport = require('passport')
const twitteStrategy = require('passport-twitter').Strategy
require('dotenv').config();
const User = require('../models/user_model');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY;


passport.use(new twitteStrategy({
  consumerKey: process.env.Consumer_Key,
  consumerSecret: process.env.Consumer_Secret,
  callbackURL: 'http://localhost:3000/login/twitter/return'
  // callbackURL: 'http://127.0.0.1:3000/login/twitter/return'
},
function(token, tokenSecret, profile, cb) {
  console.log("token : ", token,"| tokenSecret : ", tokenSecret,"| profile : ",typeof profile);

  return cb(null, profile);
}));

module.exports = {
  a : passport.authenticate('twitter'),

  b : passport.authenticate('twitter', { failureRedirect: '/login' })

  // create : function(req, res){
  //   jwt.verify(req.headers.token, secret, function(err, decoded) {
  //     User.findById( decoded.id, function(err, data) {
  //       if(err){
  //         res.json({ err })
  //       } else {
  //         Customer.update({_id : decoded.id}, {
  //           $set: {
  //             token : token,
  //             tokenSecret : tokenSecret,
  //             profile : profile
  //           }
  //         }, function( err, data ){
  //           err ? res.json({ err }) : res.json(data)
  //         })
  //       }
  //     })
  //   })
  // }

}
