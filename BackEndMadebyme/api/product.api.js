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
    find: function(req, res){
        Product.findById(req.params.id,function(error,product){
            if(error){throw error;
            }else{
                res.status(200).json(product);
            }
        });
    },
    create:function(request,response){
        var newProduct = new Product({
            name :request.body.name,
            price:request.body.price,
            quantity:request.body.quantity,
            photo:request.body.photo,
            shopId:request.body.shopId,
            categoryId:request.body.categoryId,
            status:request.body.status,
            accountId:request.body.accountId
            
            

            
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
                name :request.body.name,
                price:request.body.price,
                quantity:request.body.quantity,
                photo:request.body.photo,
                shopId:request.body.shopId,
                categoryId:request.body.categoryId,
                status:request.body.status,
                accountId:request.body.accountId
            
           
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
    search:function(req,res){
        
        Product.find({name:{$regex:req.params.keyword}},function(error,result){
            if(error){throw error;}
            else{
                res.status(200).json(result);
            }

        });
    }
};
module.exports= ProductAPI;