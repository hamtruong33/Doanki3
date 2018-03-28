var mongoose = require('mongoose');
var User = require('../schemas/user.schema');
var UserAPI = {
    findAll: function (request, response) {
        User.find({}, function (error, users) {
            if (error) {
                throw error;
            } else {
                response.status(200).json(users);
            }
        });

    },
    find: function (req, res) {
        User.findById(req.params.id, function (error, user) {
            if (error) {
                throw error;
            } else {
                res.status(200).json(user);
            }
        });
    },
    create: function (request, response) {
        var newUser = new User({
            email: request.body.email,
            password: request.body.password,
            fullName: request.body.fullName,
            phone: request.body.phone,
            shopId: request.body.shopId,
            status: request.body.status






        });
        newUser.save(function (error) {
            if (error) {
                throw error;
            } else {
                response.status(200).json(newUser);
            }
        });
    },
    update: function (request, response) {
        User.findByIdAndUpdate(
            request.body._id, {
                email: request.body.email,
                password: request.body.password,
                fullName: request.body.fullName,
                phone: request.body.phone,
                shopId: request.body.shopId,
                status: request.body.status


            },
            function (error, result) {
                if (error) {
                    throw error;
                } else {
                    response.status(200).json(result);
                }
            }

        );
    },
    delete: function (request, response) {
        User.findByIdAndRemove(request.params.id, function (error, result) {
            if (error) {
                throw error;
            } else {
                response.status(200).json(result);
            }


        });
    },
    search: function (req, res) {

        User.find({ fullName: { $regex: req.params.keyword } }, function (error, result) {
            if (error) { throw error; }
            else {
                res.status(200).json(result);
            }

        });
    }

};
module.exports = UserAPI;