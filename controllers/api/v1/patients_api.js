const Patient = require('../../../model/Patients');
const Doctor = require('../../../model/Doctors');
const passport = require('passport');
const jwt = require('jsonwebtoken');

//this will register the patient only if the doctor logged In
module.exports.register = function(req,res){

       
        let doctorID=req.user;
        
        //if db has already patient with same number
        Patient.findOne({phoneNumber:req.body.phoneNumber},function(err,patient)
            {
                if(err)
                {
                    return res.json(400,{
                        message:"Error in finding patient"
                    })
                }
                if(!patient)
                {

                    Patient.create({
                        phoneNumber: req.body.phoneNumber,
                        patientName: req.body.patientName,
                        doctor:doctorID
        
                    },function(err,patient){
                        if(err){
                            console.log('Error in patient registration',err);
                            return;
                        }
                        doctorID.patient.push(patient);
                        doctorID.save();
                        return res.json(200,{
                            data: {
                                patient: patient
                            },
                            message: "Patient registered successfully"
                        });
                    });
            
                }
                else
                {
                    return res.json(200,{
                        message:"This phone number is linked with other patient. Kindly use different phone number"
                        
                    })
                }
                })
                   
}
