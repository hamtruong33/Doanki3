var mongoose = require('mongoose');
var Order = require('../schemas/order.schema');
var OrderAPI={
    findAll: function(request,response){
        Order.find({},function(error,orders){
            if(error){
                throw error;
            }else{
                response.status(200).json(orders);
            }
        });

    },
    find: function(req, res){
        Order.findById(req.params.id,function(error,order){
            if(error){throw error;
            }else{
                res.status(200).json(order);
            }
        });
    },
    create:function(request,response){
        var newOrder = new Order({
            username :request.body.username,
            password:request.body.password,
            fullName:request.body.fullName,
            status:request.body.status,
            email:request.body.email,
            phone:request.body.phone,
            roleId:request.body.roleId
            
            

            
        });
        newOrder.save(function(error){
            if(error){
                throw error;
            }else{
                response.status(200).json(newOrder);
            }
        });
    },
    update:function(request,response){
        Order.findByIdAndUpdate(
            request.body._id,{
            username :request.body.username,
            password:request.body.password,
            fullName:request.body.fullName,
            status:request.body.status,
            email:request.body.email,
            phone:request.body.phone,
            roleId:request.body.roleId
            
           
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
        Order.findByIdAndRemove(request.params.id,function(error,result){
            if(error){
                    throw error;
                }else{
                    response.status(200).json(result);
                }


        });
    },
    /*
    search:function(req,res){
        
        Order.find({fullName:{$regex:req.params.keyword}},function(error,result){
            if(error){throw error;}
            else{
                res.status(200).json(result);
            }

        });
    }*/

};
module.exports= OrderAPI;