var mongoose = require('mongoose');
var AccountSchema = new mongoose.Schema(
    {
        
        acc_firstname: [{type:String,require:true}],
        acc_lastname: [{type:String,require:true}],
        acc_email: [{type:String,require:true}],
        acc_password: [{type:String,require:true}],        
        acc_phone: String,
        acc_photo: String,
        acc_create: Date,
        status:Boolean,
        role:String 
        
    },
    {
        versionKey: false
    }
);

module.exports= mongoose.model('Account',AccountSchema,'account');