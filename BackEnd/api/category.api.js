var mongoose = require('mongoose');
var Category = require('../schemas/category.schema');

var CategoryAPI = {
  findAll: function(request,response){
    Category.find({},function(error,categorys){
      if(error){
        throw error;
      }else{
        response.status(200).json(categorys);
      }
    });
  },

  findById: function(req, res){
    Category.findById(req.params.id,function(error,category){
        if(error){throw error;
        }else{
            res.status(200).json(category);
        }
    });
  },

  create:function(request,response){
    var newCategory = new Category({            
      cate_name: request.body.cate_name,
      cate_decription : request.body.cate_decription,         
      cate_img_logo : request.body.cate_img_logo, 
      cate_img_icon : request.body.cate_img_icon, 
      cate_tag : request.body.cate_tag, 
      cate_active : request.body.cate_active, 
      status : request.body.status,
      role : request.body.role 
    });
    newCategory.save(function(error){
        if(error){
            throw error;
        }else{
            response.status(200).json(newCategory);
        }
    });
  },

  update:function(request,response){
    Category.findByIdAndUpdate(
        request.body._id,{
          cate_name: request.body.cate_name,
          cate_decription : request.body.cate_decription,         
          cate_img_logo : request.body.cate_img_logo, 
          cate_img_icon : request.body.cate_img_icon, 
          cate_tag : request.body.cate_tag, 
          cate_active : request.body.cate_active, 
          status : request.body.status,
          role : request.body.role           
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
    Category.findByIdAndRemove(request.params.id,function(error,result){
      if(error){
        throw error;
      }else{
        response.status(200).json(result);
      }
    });
  },

  

    
}
module.exports= CategoryAPI;