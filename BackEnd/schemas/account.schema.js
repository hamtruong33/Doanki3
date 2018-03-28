var mongoose = require('mongoose');
var AccountSchema = new mongoose.Schema(
    {
        username: [{type:String,require:true}],
        password: String,
        fullName: String,
        status:Boolean,
        email:String,
        phone:Number,
        roleId:String
        

        
    },
    {
        versionKey: false
    }
);

module.exports= mongoose.model('Account',AccountSchema,'account');