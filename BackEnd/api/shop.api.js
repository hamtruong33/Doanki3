var mongoose = require('mongoose');
var Shop = require('../schemas/shop.schema');
var ShopAPI={
    findAll: function(request,response){
        Shop.find({},function(error,shops){
            if(error){
                throw error;
            }else{
                response.status(200).json(shops);
            }
        });

    },
    find: function(req, res){
        Shop.findById(req.params.id,function(error,shop){
            if(error){throw error;
            }else{
                res.status(200).json(shop);
            }
        });
    },
    create:function(request,response){
        var newShop = new Shop({
            name :request.body.name,
            address:request.body.address,
            logo:request.body.logo,
            status:request.body.status,
            description:request.body.description,
            phone:request.body.phone,
            userId:request.body.userId,
            accountId:request.body.accountId
            
            

            
        });
        newShop.save(function(error){
            if(error){
                throw error;
            }else{
                response.status(200).json(newShop);
            }
        });
    },
    update:function(request,response){
        Shop.findByIdAndUpdate(
            request.body._id,{
                name :request.body.name,
                address:request.body.address,
                logo:request.body.logo,
                status:request.body.status,
                description:request.body.description,
                phone:request.body.phone,
                userId:request.body.userId,
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
        Shop.findByIdAndRemove(request.params.id,function(error,result){
            if(error){
                    throw error;
                }else{
                    response.status(200).json(result);
                }


        });
    },
    search:function(req,res){
        
        Shop.find({name:{$regex:req.params.keyword}},function(error,result){
            if(error){throw error;}
            else{
                res.status(200).json(result);
            }

        });
    }

};
module.exports= ShopAPI;