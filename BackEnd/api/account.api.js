var mongoose = require('mongoose');
var Account = require('../schemas/account.schema');
var AccountAPI={
    findAll: function(request,response){
        Account.find({},function(error,accounts){
            if(error){
                throw error;
            }else{
                response.status(200).json(accounts);
            }
        });

    },
    find: function(req, res){
        Account.findById(req.params.id,function(error,account){
            if(error){throw error;
            }else{
                res.status(200).json(account);
            }
        });
    },
    create:function(request,response){
        var newAccount = new Account({
            username :request.body.username,
            password:request.body.password,
            fullName:request.body.fullName,
            status:request.body.status,
            email:request.body.email,
            phone:request.body.phone,
            roleId:request.body.roleId
            
            

            
        });
        newAccount.save(function(error){
            if(error){
                throw error;
            }else{
                response.status(200).json(newAccount);
            }
        });
    },
    update:function(request,response){
        Account.findByIdAndUpdate(
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
        Account.findByIdAndRemove(request.params.id,function(error,result){
            if(error){
                    throw error;
                }else{
                    response.status(200).json(result);
                }


        });
    },
    search:function(req,res){
        
        Account.find({fullName:{$regex:req.params.keyword}},function(error,result){
            if(error){throw error;}
            else{
                res.status(200).json(result);
            }

        });
    },
    login:function(req,res){
        Account.find({$and:[{username:req.body.username},{password:req.body.password}]},function(error,result){
            if(error){throw error;}
            else{
                res.status(200).json(result);
            }
        });
       

    }

};
module.exports= AccountAPI;