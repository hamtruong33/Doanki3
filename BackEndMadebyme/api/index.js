var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var requireRole = require('../requireRole');
var SuperAdmin =['SuperAdmin'];
var Admin=['Admin','SuperAdmin'];
//tao ket noi den database 
mongoose.connect('mongodb://localhost:27017/doanki3');


var AccountAPI = require('./account.api');
var ProductAPI = require('./product.api');
var RoleAPI = require('./role.api');
var UserAPI= require('./user.api');
var ShopAPI=require('./shop.api');
var OrderAPI=require('./order.api');

//Router for account
router.get('/account/findAll',requireRole(SuperAdmin), AccountAPI.findAll);
router.get('/account/token', AccountAPI.token);
router.get('/account/find/:id', AccountAPI.find);
router.post('/account/create', AccountAPI.create);
router.delete('/account/delete/:id', AccountAPI.delete);
router.put('/account/update/:id', AccountAPI.update);
router.get('/account/search/:keyword', AccountAPI.search);
router.post('/account/login', AccountAPI.login);
//router.post('/account/authenticate', AccountAPI.authenticate);

//Router for product

router.get('/product/findAll', ProductAPI.findAll);
router.get('/product/find/:id', ProductAPI.find);
router.post('/product/create', ProductAPI.create);
router.delete('/product/delete/:id', ProductAPI.delete);
router.put('/product/update/:id', ProductAPI.update);
router.get('/product/search/:keyword', ProductAPI.search);

//Router for Role
router.get('/role/findAll', RoleAPI.findAll);
router.get('/role/find/:id', RoleAPI.find);
router.post('/role/create', RoleAPI.create);
router.delete('/role/delete/:id', RoleAPI.delete);
router.put('/role/update/:id', RoleAPI.update);

//Router for User
router.get('/user/findAll', UserAPI.findAll);
router.get('/user/find/:id', UserAPI.find);
router.post('/user/create', UserAPI.create);
router.delete('/user/delete/:id', UserAPI.delete);
router.put('/user/update/:id', UserAPI.update);
router.get('/user/search/:keyword', UserAPI.search);

//Router for Shop
router.get('/shop/findAll', ShopAPI.findAll);
router.get('/shop/find/:id', ShopAPI.find);
router.post('/shop/create', ShopAPI.create);
router.delete('/shop/delete/:id', ShopAPI.delete);
router.put('/shop/update/:id', ShopAPI.update);
router.get('/shop/search/:keyword', ShopAPI.search);

//Router for Order 
router.get('/order/findAll', OrderAPI.findAll);
router.get('/order/find/:id', OrderAPI.find);
router.post('/order/create', OrderAPI.create);
router.delete('/order/delete/:id', OrderAPI.delete);
router.put('/order/update/:id', OrderAPI.update);

module.exports = router;