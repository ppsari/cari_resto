const router = require('express').Router();
const weather_controller = require('../controllers/weather_controller');

router.get('/go/:id', weather_controller.getWeather);

module.exports = router;
