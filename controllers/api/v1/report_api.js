const Report = require('../../../model/Report');
const Patient = require('../../../model/Patients');

//this will create the report according to the patientID
module.exports.createReport = function(req,res){


        console.log(req.params.id);

        Patient.findById(req.params.id,function(err,patient){
            if(err)
            {
                console.log("error in finding patient",err);
                return res.json(200,{
                    message:"Internal server patient error"
                })
            }
            console.log(patient);
            console.log(req.body);
            Report.create({
                doctorName:req.body.doctorName,
                Status: req.body.Status,
                Date: req.body.Date,
                patient:req.params.id
            },function(err,report){
                if(err)
                {
                    console.log("error in creating report ",err);
                    return;
                }
                console.log(report)
                console.log(patient.report)
                patient.report.push(report);
                patient.save();
                return res.json(200,{
                    data: {
                        report:report
                    },
                    message: "Report created"
                });
            });
     });

}
   
//this will show all the reports of patient according to the patient ID 
module.exports.list = function(req,res){

    let PatientID = req.params.id;
    
        Report.find({patient:PatientID},function(err,report){
            console.log(report);
            return res.json(200,{
                message: "List of reports",
                reports:report               
            });
        }).sort('createdAt');//oldest report first then  newest
    
}

//this  will show the reports filtered by status
module.exports.status = async function(req,res){

    let reportstatus = await Report.find({Status: req.params.Status});

    return res.json(200,{
        message: "Reports Status",
        reportstatus : reportstatus
    });
}
