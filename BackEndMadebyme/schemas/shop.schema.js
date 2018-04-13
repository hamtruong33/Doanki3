var mongoose = require('mongoose');
var ShopSchema = new mongoose.Schema(
    {
        name: [{type:String,require:true}],
        address: String,
        logo: String,
        status:Boolean,
        description:String,
        phone:Number,
        userId:String,
        accountId:String
        

        
    },
    {
        versionKey: false
    }
);

module.exports= mongoose.model('Shop',ShopSchema,'shop');