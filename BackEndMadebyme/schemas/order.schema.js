var mongoose = require('mongoose');
var OrderSchema = new mongoose.Schema(
    {
        userId:String,
        payId: String,
        Total: Number,
        date:Date
        
        

        
    },
    {
        versionKey: false
    }
);

module.exports= mongoose.model('Order',OrderSchema,'order');