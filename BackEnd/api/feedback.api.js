var mongoose = require('mongoose');
var Feedback = require('../schemas/feedback.schema');
var FeedbackAPI={
    findByUser: function(request,response){
        Feedback.find({id_user:request.params.id_user},function(error,feedbacks){
            if(error){
                throw error;
            }else{
                response.status(200).json(feedbacks);
            }
        });

    },
    findByProduct: function(request,response){
        Feedback.find({id_product:request.params.id_product},function(error,feedbacks){
            if(error){
                throw error;
            }else{
                response.status(200).json(feedbacks);
            }
        });

    },
    findById: function(req, res){
        Feedback.findById(req.params.id,function(error,feedback){
            if(error){throw error;
            }else{
                res.status(200).json(feedback);
            }
        });
    },
    create:function(request,response){
        var newFeedback = new Feedback({
            id_user: request.body.id_user,
            id_product : request.body.id_product,         
            fb_message : request.body.fb_message, 
        });
        newFeedback.save(function(error){
            if(error){
                throw error;
            }else{
                response.status(200).json(newFeedback);
            }
        });
    },
    update:function(request,response){
        Feedback.findByIdAndUpdate(
            request.body._id,{
                id_user: request.body.id_user,
                id_product : request.body.id_product,         
                fb_message : request.body.fb_message            
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
        Feedback.findByIdAndRemove(request.params.id,function(error,result){
            if(error){
                    throw error;
                }else{
                    response.status(200).json(result);
                }


        });
    },
    

};
module.exports= FeedbackAPI;