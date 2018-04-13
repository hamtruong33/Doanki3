var mongoose = require('mongoose');
var Manufacturer = require('../schemas/manufacturer.schema');

var ManufacturerAPI = {
    findAll: function(request,response){
        Manufacturer.find({},function(error,manufacturers){
            if(error){
              throw error;
            }else{
              response.status(200).json(manufacturers);
            }
          });    
    },

    findById: function(req, res){
        Manufacturer.findById(req.params.id,function(error,manufacturer){
            if(error){throw error;
            }else{
                res.status(200).json(manufacturer);
            }
        });
    },

    create:function(request,response){
        var newManufacturer = new Manufacturer({ 
            manufa_name: request.body.manufa_name,
            manufa_decription : request.body.manufa_decription,         
            manufa_img_logo : request.body.manufa_img_logo, 
            manufa_img_icon : request.body.manufa_img_icon,
            manufa_tag : request.body.manufa_tag,
            status: request.body.status,
            role: request.body.role
        });
        newManufacturer.save(function(error){
            if(error){
                throw error;
            }else{
                response.status(200).json(newManufacturer);
            }
        });
    },

    update:function(request,response){
        Manufacturer.findByIdAndUpdate(
            request.body._id,{
                manufa_name: request.body.manufa_name,
                manufa_decription : request.body.manufa_decription,         
                manufa_img_logo : request.body.manufa_img_logo, 
                manufa_img_icon : request.body.manufa_img_icon,
                manufa_tag : request.body.manufa_tag,
                status: request.body.status,
                role: request.body.role           
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
        Manufacturer.findByIdAndRemove(request.params.id,function(error,result){
          if(error){
            throw error;
          }else{
            response.status(200).json(result);
          }
        });
    },
}

module.exports = ManufacturerAPI;