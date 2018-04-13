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
    findById: function(req, res){
        Account.findById(req.params.id,function(error,account){
            if(error){throw error;
            }else{
                res.status(200).json(account);
            }
        });
    },
    create:function(request,response){
        var newAccount = new Account({            
            acc_firstname: request.body.acc_firstname,
            acc_lastname: request.body.acc_lastname,
            acc_email: request.body.acc_email,
            acc_password: request.body.acc_password,        
            acc_phone: request.body.acc_phone,
            acc_photo: request.body.acc_photo,
            acc_create: request.body.acc_create,
            status:request.body.status,
            role:request.body.role 
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
                acc_firstname: request.body.acc_firstname,
                acc_lastname: request.body.acc_lastname,
                acc_email: request.body.acc_email,
                acc_password: request.body.acc_password,        
                acc_phone: request.body.acc_phone,
                acc_photo: request.body.acc_photo,
                acc_create: request.body.acc_create,
                status:request.body.status,
                role:request.body.role            
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
    searchByemail:function(req,res){        
        Account.find({acc_email:{$regex:req.params.keyword}},function(error,result){
            if(error){throw error;}
            else{
                res.status(200).json(result);
            }

        });
    },
    login:function(req,res){
        Account.find({$and:[{acc_email:req.body.acc_email},{acc_password:req.body.acc_password}]},function(error,result){
            if(error){throw error;}
            else{
                res.status(200).json(result);
            }
        });      

    }

};
module.exports= AccountAPI;