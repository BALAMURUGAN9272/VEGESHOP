const express = require('express');
const { getbanner } = require('../Controllers/Bannercontroller');
const router = express.Router();

router.route('/banner').get(getbanner)

module.exports = router;