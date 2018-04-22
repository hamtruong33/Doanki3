var mongoose = require('mongoose');
var OrderSchema = new mongoose.Schema(
    {
        product_name        : [{type:String,require:true}],
        product_pricestock  : [{type:Number,require:true}],
        product_pricesale   : Number,
        product_manufact    : String,
        id_shop             : [{type:mongoose.Schema.Types.ObjectId,ref:'Shop'}],
        id_category         : [{type:mongoose.Schema.Types.ObjectId,ref:'Category'}],
        product_datecreate  : Date,
        product_quickken    : String,
        product_description : String,
        status              : Boolean,
        status_sale         : Boolean,
        status_new          : Boolean,
        id_account          : [{type:mongoose.Schema.Types.ObjectId,ref:'Account'}]
    },
    {
        versionKey: false
    }
);
module.exports=mongoose.model('Order',OrderSchema,'order');