var mongoose = require('mongoose');
var ProductPhoto = require('../schemas/product_photo');
var ProductphotoAPI={
    
    findByProduct: function(request,response){
        ProductPhoto.find({id_product:request.params.id_product},function(error,productPhotos){
            if(error){
                throw error;
            }else{
                response.status(200).json(productPhotos);
            }
        });

    },
    findById: function(req, res){
        ProductPhoto.findById(req.params.id,function(error,productPhoto){
            if(error){throw error;
            }else{
                res.status(200).json(productPhoto);
            }
        });
    },
    
    

};
module.exports= ProductphotoAPI;