const express = require('express');
const router = express.Router();
const bmi_controller = require('../controllers/bmi_controller');
const check = require("../helpers/util");

router.post('/', check.isLogin, bmi_controller.getBmi);

module.exports = router;

// localhost:3000/bmi + body: weight & height
