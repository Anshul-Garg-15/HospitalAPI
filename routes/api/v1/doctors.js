const express = require('express');
const passport = require('passport');
const router = express.Router();
const doctorApi = require('../../../controllers/api/v1/doctors_api')


//route for register the doctor
router.post('/register', doctorApi.register);

//route for login the doctor
router.post('/login',doctorApi.login);


module.exports = router;