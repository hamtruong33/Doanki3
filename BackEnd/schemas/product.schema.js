var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema(
    {
        product_name        : [{type:String,require:true}],
        product_pricestock  : [{type:Number,require:true}],
        product_pricesale   : Number,
        product_manufact    : String,
        id_shop             : [{type:String,require:true}],
        id_category         : String,
        product_datecreate  : Date,
        product_quickken    : String,
        product_description : String,
        status              : Boolean,
        status_sale         : Boolean,
        status_new          : Boolean,
        id_account          : String
    },
    {
        versionKey: false
    }
);
module.exports=mongoose.model('Product',ProductSchema,'product');