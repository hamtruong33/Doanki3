var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var requireRole = require('../requireRole');
//var Guest =['5acd0aaf356e91022ac26159','5acd0aaf356e91022ac26157','5acd0aaf356e91022ac26155'];
var Admin=['5acd0aaf356e91022ac26157','5acd0aaf356e91022ac26155'];
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
router.get('/account/findAll',requireRole(SuperAdmin), AccountAPI.findAll);

router.post('/account/create', AccountAPI.create);
router.delete('/account/delete/:id', AccountAPI.delete);
router.put('/account/update/:id', AccountAPI.update);
router.post('/account/login', AccountAPI.login);


//Router for product

router.get('/product/findAll', ProductAPI.findAll);
router.get('/product/findByStatus', ProductAPI.findByStatus);
router.get('/product/findById/:id', ProductAPI.findById);
router.post('/product/create', ProductAPI.create);
router.delete('/product/delete/:id', ProductAPI.delete);
router.put('/product/update', ProductAPI.update);

//Router for productphoto
router.get('/product/findByProduct/:id', ProductphotoAPI.findByProduct);



//Router for Role
router.get('/role/findAll', RoleAPI.findAll);

router.post('/role/create', RoleAPI.create);
router.delete('/role/delete/:id', RoleAPI.delete);
router.put('/role/update/:id', RoleAPI.update);

//Router for User
router.get('/user/findAll', UserAPI.findAll);

router.post('/user/create', UserAPI.create);
router.delete('/user/delete/:id', UserAPI.delete);
router.put('/user/update/:id', UserAPI.update);


//Router for Shop
router.get('/shop/findAll', ShopAPI.findAll);
router.get('/shop/findById/:id', ShopAPI.findById);
router.post('/shop/create', ShopAPI.create);
router.delete('/shop/delete/:id', ShopAPI.delete);
router.put('/shop/update/:id', ShopAPI.update);




module.exports = router;