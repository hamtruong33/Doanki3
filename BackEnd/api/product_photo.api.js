var mongoose = require('mongoose');
var ProductPhoto = require('../schemas/product_photo');
var Product = require('../schemas/product.schema');
var ProductphotoAPI = {

    findByProduct: function (request, response) {
        ProductPhoto.find({ id_product: request.params.id_product }, function (error, productPhotos) {
            if (error) {
                throw error;
            } else {
                response.status(200).json(productPhotos);
            }
        });

    },
    findByProductTest: function (request, response) {

        ProductPhoto.find().populate({
            path: 'id_product',
            model: 'Product',
            populate: {
                path: 'id_category',
                model: 'Category',

            }
        })
            .exec(function (err, result) {
                if (err) {
                    throw err;
                } else {

                }
            });

    },
    findById: function (req, res) {
        ProductPhoto.findById(req.params.id, function (error, productPhoto) {
            if (error) {
                throw error;
            } else {
                res.status(200).json(productPhoto);
            }
        });
    },



};
module.exports = ProductphotoAPI;