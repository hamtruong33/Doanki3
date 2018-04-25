var mongoose = require('mongoose');
var CategorySchema = new mongoose.Schema(
    {
        cate_name: {type:String,require:true},
        cate_decription : String,         
        cate_img_logo : String, 
        cate_img_icon : String, 
        cate_tag : String, 
        cate_active : Boolean, 
        status : Boolean,
        role : String 
    },
    {
        versionKey: false
    }
);

module.exports= mongoose.model('Category',CategorySchema,'category');