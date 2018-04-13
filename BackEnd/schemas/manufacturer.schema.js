var mongoose = require('mongoose');
var ManufacturerSchema = new mongoose.Schema(
    {
        manufa_name: [{type:String,require:true}],
        manufa_decription : String,         
        manufa_img_logo : String, 
        manufa_img_icon : String,
        manufa_tag : String,
        status: Boolean,
        role: String
    },
    {
        versionKey: false
    }
);

module.exports= mongoose.model('Manufacturer',ManufacturerSchema,'manufacturer');