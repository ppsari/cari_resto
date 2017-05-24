// require('dotenv').config();
// const db = require('../models');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// let secret = process.env.SECRET_KEY;

function index(req, res) {
  res.send("Our site is alive, yeay..");
}

// function createUser(req, res) {
//   let hash = bcrypt.hashSync(req.body.password, 8);
//
//   db.Students.create({
//     name : req.body.name,
//     gender : req.body.gender,
//     age : req.body.age,
//     address : req.body.address,
//     email : req.body.email,
//     username : req.body.username,
//     password : hash,
//     role : req.body.role
//   })
//   .then(() => res.send(`Create user success!!`))
//   .catch(err => res.send(err.message));
// }


module.exports = {
  index
}
