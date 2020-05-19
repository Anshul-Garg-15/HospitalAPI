const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({
    // username would be doctor email address
    email : {
        type:String,
        required: true,
        unique:true
    },
    password : {
        type:String,
        required:true
    }

},{
    timestamps:true
});

const Doctor = mongoose.model('Doctor' , doctorSchema);

module.exports = Doctor;

