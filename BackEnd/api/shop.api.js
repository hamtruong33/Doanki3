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
    findById: function(req, res){ 
        Shop.findById(req.params.id,function(error,shop){
            if(error){throw error;
            }else{
                res.status(200).json(shop);
            }
        });
    },
    
    create:function(request,response){
        var newShop = new Shop({
            shop_name       : request.body.shop_name,
            shop_address    : request.body.shop_address,
            shop_logo       : request.body.shop_logo,
            shop_hotline    : request.body.shop_hotline,
            shop_title      : request.body.shop_title,
            id_user         : request.body.id_user,
            shop_datecreate : request.body.shop_datecreate,
            shop_dateusing  : request.body.shop_dateusing,
            id_account      : request.body.id_account,
            shop_active     : request.body.shop_active,
            status          : request.body.status,
            shop_maincate   : request.body.shop_maincate

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
                shop_name       : request.body.shop_name,
                shop_address    : request.body.shop_address,
                shop_logo       : request.body.shop_logo,
                shop_hotline    : request.body.shop_hotline,
                shop_title      : request.body.shop_title,
                id_user         : request.body.id_user,
                shop_datecreate : request.body.shop_datecreate,
                shop_dateusing  : request.body.shop_dateusing,
                id_account      : request.body.id_account,
                shop_active     : request.body.shop_active,
                status          : request.body.status,
                shop_maincate   : request.body.shop_maincate        
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
        Shop.find({shop_name:{$regex:req.params.keyword}},function(error,result){
            if(error){throw error;}
            else{
                res.status(200).json(result);
            }

        });
    }

};
module.exports= ShopAPI;