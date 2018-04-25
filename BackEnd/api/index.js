var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var requireRole = require('../requireRole');
var verifyToken = require('../verifytokenuser');
//var Guest =['5acd0aaf356e91022ac26159','5acd0aaf356e91022ac26157','5acd0aaf356e91022ac26155'];
var Admin=['5acd0aaf356e91022ac26157','5acd0aaf356e91022ac26159'];
var SuperAdmin=['5acd0aaf356e91022ac26159'];

//tao ket noi den database 
mongoose.connect('mongodb://localhost:27017/soshop');



var AccountAPI = require('./account.api');
var CategoryAPI = require('./category.api');
var FeedbackAPI = require('./feedback.api');
var ManufacturerAPI = require('./manufacturer.api');
var ProductAPI = require('./product.api');
var ProductphotoAPI = require('./product_photo.api');
var RoleAPI = require('./role.api');
var UserAPI= require('./user.api');
var ShopAPI=require('./shop.api');


//Router for account
router.get('/account/findAll', AccountAPI.findAll);
router.get('/account/findById/:id',AccountAPI.findById);
router.post('/account/create',AccountAPI.create);
router.delete('/account/delete/:id', AccountAPI.delete);
router.put('/account/update', AccountAPI.update);
router.post('/account/login', AccountAPI.login);


//Router for product

router.get('/product/findAll', ProductAPI.findAll);
router.get('/product/findByStatus', ProductAPI.findByStatus);
router.get('/product/findById/:id', ProductAPI.findById);
router.get('/product/findByShop/:id', ProductAPI.findByShop);
//router.get('/product/findByShopTest/:id',ProductAPI.findByShopTest);
router.get('/product/findByShopName', ProductAPI.findByShopName);
router.post('/product/create', ProductAPI.create);
router.delete('/product/delete/:id', ProductAPI.delete);
router.put('/product/update', ProductAPI.update);
//router.get('/product/test',ProductAPI.test);

//Router for productphoto
router.get('/product/findByProduct/:id', ProductphotoAPI.findByProduct);
router.get('/product/findByProductTest/',ProductphotoAPI.findByProductTest);


//Router for Role
router.get('/role/findAll', RoleAPI.findAll);

router.post('/role/create', RoleAPI.create);
router.delete('/role/delete/:id', RoleAPI.delete);
router.put('/role/update', RoleAPI.update);

//Router for User
router.get('/user/findAll', UserAPI.findAll);
router.get('/user/find/:id', UserAPI.find);
router.post('/user/create', UserAPI.create);
router.delete('/user/delete/:id', UserAPI.delete);
router.put('/user/update', UserAPI.update);
router.post('/user/login', UserAPI.login);



//Router for Shop
router.get('/shop/findAll', ShopAPI.findAll);
router.get('/shop/findById/:id', ShopAPI.findById);
router.get('/shop/findbyuser', ShopAPI.findbyuser);
router.get('/shop/verifyshop', ShopAPI.verifyshop);
router.post('/shop/create', ShopAPI.create);
router.delete('/shop/delete/:id', ShopAPI.delete);
router.put('/shop/update', ShopAPI.update);




module.exports = router;