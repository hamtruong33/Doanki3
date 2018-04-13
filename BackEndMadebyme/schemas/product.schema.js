var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema(
    {
        name:[{type:String,require:true}],
        price:[{type:Number,require:true}],
        quantity:[{type:Number,require:true}],
        photo:String,
        shopId:String,
        categoryId:String,
        status:Boolean,
        accountID:String,


    },
    {
        versionKey: false
    }
);
module.exports=mongoose.model('Product',ProductSchema,'product');