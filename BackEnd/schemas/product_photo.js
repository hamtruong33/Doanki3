var mongoose = require('mongoose');
var ProductphotoShema = new mongoose.Schema(
    {
        id_product  : String,
        photosmart  : String,
        photolarger : String  
    },
    {
        versionKey: false
    }
);
module.exports = mongoose.model('Productphoto',ProductphotoShema,'product_photo');