var mongoose = require('mongoose');
var FeedbackSchema = new mongoose.Schema(
    {
        id_user: [{type:String,require:true}],
        id_product : [{type:String,require:true}],         
        fb_message : String, 
        
    },
    {
        versionKey: false
    }
);

module.exports= mongoose.model('Feedback',FeedbackSchema,'feedback');