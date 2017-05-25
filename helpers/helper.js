const jwt = require('jsonwebtoken');
const db = require('../models/user_model')

module.exports = {
  isLogin: function(req, res, next) {
    jwt.verify(req.headers.token, 'rahasia', function(err, decoded) {
      if (decoded) {
        next()
      } else {
        res.send('You must login !')
      }
    })
  },
  isAuthorized: function(req, res, next) {
    jwt.verify(req.headers.token, 'rahasia', function(err, decoded) {
      if (decoded.role == "admin") {
        next()
      } else {
        res.send('You not Authorized !')
      }
    })
  },
  isItYours: function(req, res, next) {
    jwt.verify(req.headers.token, 'rahasia', function(err, decoded) {
      if (decoded.id == req.params.id || decoded.role == "admin") {
        next()
      } else {
        res.send('This is not your account !')
      }
    })
  },
  isUnique: function(req, res, next) {
    db.User.findOne({ where: {username:req.body.username} })
      .then(user => {
        if( user ) {
          res.send("user sudah ada")
        } else {
          next()
        }
      })
      // next()
  }
}
