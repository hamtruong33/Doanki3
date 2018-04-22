var mongoose = require('mongoose');
var ProductphotoShema = new mongoose.Schema(
    {
        id_product  : {type:mongoose.Schema.Types.ObjectId,ref:'Product'},
        photosmart  : String,
        photolarger : String  
    },
    {
        versionKey: false
    }
);
module.exports = mongoose.model('Productphoto',ProductphotoShema,'product_photo');