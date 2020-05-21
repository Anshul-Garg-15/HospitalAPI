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
    },

    //doctor schema will have patient ID
    patient: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Patient'
  
        }
      ]
},{
    timestamps:true
});

const Doctor = mongoose.model('Doctor' , doctorSchema);

module.exports = Doctor;

