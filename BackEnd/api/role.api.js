var mongoose = require('mongoose');
var Role = require('../schemas/role.schema');
var RoleAPI={
    findAll: function(request,response){
        Role.find({},function(error,roles){
            if(error){
                throw error;
            }else{
                response.status(200).json(roles);
            }
        });

    },
    findById: function(req, res){
        Role.findById(req.params.id,function(error,role){
            if(error){throw error;
            }else{
                res.status(200).json(role);
            }
        });
    },
    create:function(request,response){
        var newRole = new Role({
            role_name   :request.body.role_name,
            role_des    :request.body.role_des
        });
        newRole.save(function(error){
            if(error){
                throw error;
            }else{
                response.status(200).json(newRole);
            }
        });
    },
    update:function(request,response){
        Role.findByIdAndUpdate(
            request.body._id,{
                role_name   :request.body.role_name,
                role_des    :request.body.role_des
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
        Role.findByIdAndRemove(request.params.id,function(error,result){
            if(error){
                    throw error;
                }else{
                    response.status(200).json(result);
                }


        });
    }

};
module.exports= RoleAPI;