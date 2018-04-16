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
            user_firstname: request.body.email,
            user_lastname: request.body.user_lastname,
            user_email : request.body.user_email,
            user_password:request.body.user_password,
            user_phone:request.body.user_phone,
            user_photo:request.body.user_photo,
            user_birthday:request.body.user_birthday,
            user_create:request.body.user_create,
            user_address:request.body.user_address,
            user_shopactive:request.body.user_shopactive,
            status:request.body.status,
            rip_account:request.body.rip_account
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
                user_firstname: request.body.email,
                user_lastname: request.body.user_lastname,
                user_email : request.body.user_email,
                user_password:request.body.user_password,
                user_phone:request.body.user_phone,
                user_photo:request.body.user_photo,
                user_birthday:request.body.user_birthday,
                user_create:request.body.user_create,
                user_address:request.body.user_address,
                user_shopactive:request.body.user_shopactive,
                status:request.body.status,
                rip_account:request.body.rip_account
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
    },
    login:function(req,res){
        let data1 = {
            user_email: req.body.user_email,
            user_password: req.body.user_password
        };

        Account.findOne(data1).lean().exec(function (error, user)  {
            if (error) { throw error; }
            else {
                //console.log(account);
               /* let data = {
                    id: account._id,
                    role: account.role
                };*/
                //console.log(data);
                var token = jwt.sign( { id: user._id}, config.secret, { expiresIn: 86400 });

                res.status(200).send({ auth: true, token: token ,id: user._id});
            }
        });
    }

};
module.exports = UserAPI;