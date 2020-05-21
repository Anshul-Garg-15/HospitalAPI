const Doctor = require('../../../model/Doctors');
const jwt = require('jsonwebtoken');


//this will register the doctor
module.exports.register = function(req,res){

    try{

        Doctor.create({email:req.body.email,password:req.body.password},function(err,doctor){
            if(err){
                console.log('Error in doctor registration',err);
                return;
            }
            return res.json(200,{
                data: {
                    doctors: doctor
                },
                message: "Doctor registered successfully"
            });
        });

    }catch(err){
        console.log(err);
        return res.json(500,{
            message: "Internal Server Error"
        });

    }
}


//this will help to login the doctor
module.exports.login = async function(req,res){

    try{

        let doctor = await Doctor.findOne({email:req.body.email});

    if(!doctor || doctor.password != req.body.password){
        return res.json(422,{
            messsage: "Invalid username or password"
        });
    }

    return res.json(200,{
        message: "Login Successfully",
        //create token
        data: {
            //this set the token and send it to the user
            token: jwt.sign(doctor.toJSON(),'hospital',{expiresIn: '2000000000'})
        }
    });

    }catch(err){
        console.log('error',err)
        return res.json(500,{
            message: 'Internal server error'
        });
    }
    
}