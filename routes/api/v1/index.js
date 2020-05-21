const express = require('express');

const router = express.Router();

router.use('/doctors',require('./doctors'));
router.use('/patients',require('./patient'));


module.exports = router;