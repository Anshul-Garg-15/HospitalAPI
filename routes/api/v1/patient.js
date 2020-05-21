const express = require('express');
const passport = require('passport');
const router = express.Router();
const patientApi = require('../../../controllers/api/v1/patients_api');
const reportApi = require('../../../controllers/api/v1/report_api');


//route for register the patient
router.post('/register' , passport.authenticate('jwt',{session: false}), patientApi.register);

//route for create report of patient with their ID
router.post('/:id/create_report',reportApi.createReport);

//route for showing all reports of patient
router.get('/:id/all_reports',reportApi.list);4

//route for showing all the reports of all patients filtered by status 
router.get('/reports/:Status' , reportApi.status);

module.exports = router;