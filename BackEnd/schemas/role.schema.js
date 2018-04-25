var mongoose = require('mongoose');
var RoleSchema = new mongoose.Schema(
    {
        role_name: {type:String,require:true},
        role_des : String         
        
    },
    {
        versionKey: false
    }
);

module.exports= mongoose.model('Role',RoleSchema,'role');