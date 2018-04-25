var mongoose = require('mongoose');
var FeedbackSchema = new mongoose.Schema(
    {
        id_user: {type:mongoose.Schema.Types.ObjectId,ref:'User',require:true},
        id_product : {type:mongoose.Schema.Types.ObjectId,ref:'Product',require:true},         
        fb_message : String, 
        
    },
    {
        versionKey: false
    }
);

module.exports= mongoose.model('Feedback',FeedbackSchema,'feedback');