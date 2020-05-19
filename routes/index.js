const express = require('express');

const router = express.Router();

//use api folder to access files in this folder
router.use('/api' , require("./api"));


module.exports = router;