var mongoose = require('mongoose');
var RoleSchema = new mongoose.Schema(
    {
        name: [{type:String,require:true}],
        
        

        
    },
    {
        versionKey: false
    }
);

module.exports= mongoose.model('Role',RoleSchema,'role');