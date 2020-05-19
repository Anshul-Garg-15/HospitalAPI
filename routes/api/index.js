const express = require('express');
const router = express.Router();

//use v1 folder to access file in this folder
router.use('/v1',require('./v1'));

module.exports = router;