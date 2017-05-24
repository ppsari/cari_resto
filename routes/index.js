const router = require('express').Router();
const users_controller = require('../controllers/users_controller');

router.get('/', users_controller.index);

module.exports = router;
