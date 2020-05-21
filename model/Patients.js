const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
    // username would be doctor email address
    phoneNumber : {
        type:Number,
        required: true,
        unique:true
    },
    patientName : {
        type: String,
        required: true
    },
    //patients belongs to the doctor
    // doctor: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Doctor'
    // },

    //patient will have report id also
    report: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Report'
    }],

},{
    timestamps:true
});

const Patient = mongoose.model('Patient' , patientSchema);

module.exports = Patient;