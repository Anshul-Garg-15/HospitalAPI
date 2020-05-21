const mongoose = require('mongoose');

const reportSchema = mongoose.Schema({
    doctorName:{
        type:String,
        required:true,
    },
    Status:{
        type:String,
        required:true
    },
    Date: {
        type:String,
        required:true
    },
    //report will have the patient ID
    patient: 
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Patient'
  
        }
      

},{
    timestamps:true
});

const Report = mongoose.model('Report' , reportSchema);

module.exports = Report;