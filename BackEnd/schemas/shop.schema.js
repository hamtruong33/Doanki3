var mongoose = require('mongoose');
var ShopSchema = new mongoose.Schema(
    {
        shop_name       : {type:String,require:true},
        shop_address    : {type:String,require:true},
        shop_logo       : String,
        shop_hotline    : {type:String,require:true},
        shop_title      : String,
        id_user         : {type:mongoose.Schema.Types.ObjectId,ref:'User',require:true},
        shop_datecreate : Date,
        shop_dateusing  : Date,
        id_account      : {type:mongoose.Schema.Types.ObjectId,ref:'Account'},
        shop_active     : Boolean,
        status          : Boolean,
        shop_maincate   : {type:mongoose.Schema.Types.ObjectId,ref:'Category'}
    },
    {
        versionKey: false
    }
);


module.exports= mongoose.model('Shop',ShopSchema,'shop');