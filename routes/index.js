const router = require('express').Router();
const users_controller = require('../controllers/users_controller');
// const passport = require('passport')
const passport_twitter = require('../models/passport_twitter')

router.get('/', users_controller.index);
router.post('/register', users_controller.register);
router.post('/login', users_controller.login);

// router.post('/passportLocal', users_controller.passportLocal);
router.get('/login/twitter', passport_twitter.a );

router.get('/login/twitter/return', passport_twitter.b, function(req, res) {
  res.redirect('/');
  // res.send(profile)
} );
// router.get('/profile', passport_twitter.b, function(req, res, profile) {
//   // res.redirect('/profile');
//   res.send(profile)
// } );

module.exports = router;
