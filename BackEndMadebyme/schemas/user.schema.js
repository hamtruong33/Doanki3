var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema(
    {
        email: [{type:String,require:true}],
        password: [{type:String,require:true}],
        fullName:String,
        phone:Number,
        shopId:String,
        status:Boolean

        

        
    },
    {
        versionKey: false
    }
);

module.exports= mongoose.model('User',UserSchema,'user');