var mongoose=require('mongoose');
var Product = require('../schemas/product.schema');
var ProductAPI={
    findAll: function(request,response){
        Product.find({},function(error,products){
            if(error){
                throw error;
            }else{
                response.status(200).json(products);
            }
        });

    },
    findByCategory: function(request,response){
        Product.find({id_category: request.params.id_category},function(error,products){
            if(error){
                throw error;
            }else{
                response.status(200).json(products);
            }
        });

    },
    findByShop: function(request,response){
        Product.find().populate({path:'id_shop',math:{id_shop:request.params.id_shop}}).exec(function(error,products){
            if(error){
                throw error;
                
            }else{
                response.status(200).json(products);
            }
        });

    },
    findByShopName: function(request,response){
        Product.find().populate('id_shop','shop_name').populate('id_category','cate_name')
        .exec(function(err,products){  
            if(err){throw err;
            }else{
                
                response.status(200).json(products);
            }
        });

    },

    findByName: function(request,response){
        Product.find({product_name: request.params.product_name},function(error,products){
            if(error){
                throw error;
            }else{
                response.status(200).json(products);
            }
        });
    },

    findById: function(req, res){
        Product.findById(req.params.id,function(error,product){
            if(error){throw error;
            }else{
                res.status(200).json(product);
            }
        });
    },
    findByStatus: function(req,res){
        Product.find({status:false},function(error,products){
            if(error){throw error;
            }else{
                res.status(200).json(products);
            }
        });
    },

    

    create:function(request,response){
        var newProduct = new Product({
            product_name        : request.body.product_name,
            product_pricestock  : request.body.product_pricestock,
            product_pricesale   : request.body.product_pricesale,
            product_manufact    : request.body.product_manufact,
            id_shop             : request.body.id_shop,
            id_category         : request.body.id_category,
            product_datecreate  : request.body.product_datecreate,
            product_quickken    : request.body.product_quickken,
            product_description : request.body.product_description,
            status              : request.body.status,
            status_sale         : request.body.status_sale,
            status_new          : request.body.status_new,
            id_account          : request.body.id_account       
            
        });
        newProduct.save(function(error){
            if(error){
                throw error;
            }else{
                response.status(200).json(newProduct);
            }
        });
    },
    update:function(request,response){
        Product.findByIdAndUpdate(
            request.body._id,{
                product_name        : request.body.product_name,
                product_pricestock  : request.body.product_pricestock,
                product_pricesale   : request.body.product_pricesale,
                product_manufact    : request.body.product_manufact,
                id_shop             : request.body.id_shop,
                id_category         : request.body.id_category,
                product_datecreate  : request.body.product_datecreate,
                product_quickken    : request.body.product_quickken,
                product_description : request.body.product_description,
                status              : request.body.status,
                status_sale         : request.body.status_sale,
                status_new          : request.body.status_new,
                id_account          : request.body.id_account
            },
            function(error,result){
                if(error){
                    throw error;
                }else{
                    response.status(200).json(result);
                }
            }

        );
    },
    delete:function(request,response){
        Product.findByIdAndRemove(request.params.id,function(error,result){
            if(error){
                    throw error;
                }else{
                    response.status(200).json(result);
                }


        });
    },
    
};
module.exports= ProductAPI;