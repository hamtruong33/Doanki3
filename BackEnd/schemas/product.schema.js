var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema(
    {
        product_name        : {type:String,require:true},
        product_pricestock  : {type:Number,require:true},
        product_pricesale   : Number,
        product_manufact    : {type:mongoose.Schema.Types.ObjectId,ref:'Manufacturer'},
        id_shop             : {type:mongoose.Schema.Types.ObjectId,ref:'Shop'},
        id_category         : {type:mongoose.Schema.Types.ObjectId,ref:'Category'},
        product_datecreate  : Date,
        product_quickken    : String,
        product_description : String,
        status              : Boolean,
        status_sale         : Boolean,
        status_new          : Boolean,
        id_account          : {type:mongoose.Schema.Types.ObjectId,ref:'Account'},
        avata               : String,
    },
    {
        versionKey: false
    }
);
module.exports=mongoose.model('Product',ProductSchema,'product');