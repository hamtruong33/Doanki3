var mongoose = require('mongoose');
var Account = require('../schemas/account.schema');
var jwt = require('jsonwebtoken');
var config = require('../config');

var AccountAPI = {
    findAll: function (request, response) {
        Account.find({}, function (error, accounts) {
            if (error) {
                throw error;
            } else {
                response.status(200).json(accounts);
            }
        });

    },
    find: function (req, res) {
        Account.findById(req.params.id, function (error, account) {
            if (error) {
                throw error;
            } else {
                res.status(200).json(account);
            }
        });
    },
    create: function (request, response) {
        var newAccount = new Account({
            username: request.body.username,
            password: request.body.password,
            fullName: request.body.fullName,
            status: request.body.status,
            email: request.body.email,
            phone: request.body.phone,
            roleId: request.body.roleId




        });
        newAccount.save(function (error) {
            if (error) {
                throw error;
            } else {
                response.status(200).json(newAccount);
            }
        });
    },
    update: function (request, response) {
        Account.findByIdAndUpdate(
            request.body._id, {
                username: request.body.username,
                password: request.body.password,
                fullName: request.body.fullName,
                status: request.body.status,
                email: request.body.email,
                phone: request.body.phone,
                roleId: request.body.roleId


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
        Account.findByIdAndRemove(request.params.id, function (error, result) {
            if (error) {
                throw error;
            } else {
                response.status(200).json(result);
            }


        });
    },
    search: function (req, res) {

        Account.find({ fullName: { $regex: req.params.keyword } }, function (error, result) {
            if (error) { throw error; }
            else {
                res.status(200).json(result);
            }

        });
    },
    login: function (req, res) {
        let data1 = {
            username: req.body.username,
            password: req.body.password
        };

        Account.findOne(data1).lean().exec(function (error, account)  {
            if (error) { throw error; }
            else {
                //console.log(account);
                let data = {
                    id: account._id,
                    roleId: account.roleId
                };
                //console.log(data);
                var token = jwt.sign(data, config.secret, { expiresIn: 86400 });

                res.status(200).send({ auth: true, token: token ,data:data});
            }
        });


    },
    token: function (req, res) {
        var token = req.headers['x-access-token'];
        if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
        jwt.verify(token, config.secret, function (err, decoded) {
            if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

            res.status(200).send(decoded.id);
        });
    },

    authenticate: function (req, res) {
        let data = {
            username: req.body.username,
            password: req.body.password
        };
        Account.findOne(data).lean().exec(function (error, account) {
            if (error) { throw error; }
            if (!account) {
                return res.status(404).json({ 'message': 'Account not found!' });

            }
            console.log(account);
            let token = jwt.sign(account, 'Anh Minh qua dep trai', {
                expiresIn: 86400  //expires in 1 hour
            });
            res.json({ error: false, token: token });
        })
    }

};
module.exports = AccountAPI;