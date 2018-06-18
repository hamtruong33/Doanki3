var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var Product = require('../schemas/product.schema');
var Account = require('../schemas/account.schema');
var Productphoto = require('../schemas/product_photo');
var Shop = require('../schemas/shop.schema');
var User = require('../schemas/user.schema');
var multer = require('multer');
var requireRole = require('../requireRole');
var verifyToken = require('../verifytokenuser');
//var Guest =['5acd0aaf356e91022ac26159','5acd0aaf356e91022ac26157','5acd0aaf356e91022ac26155'];
var Admin = ['5acd0aaf356e91022ac26157', '5acd0aaf356e91022ac26159'];
var SuperAdmin = ['5acd0aaf356e91022ac26159'];

//tao ket noi den database 
mongoose.connect('mongodb://localhost:27017/soshop');


//tao duong dan luu hinh product
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

// luu hinh product vao duong dan
const upload = multer({ storage: storage });





var AccountAPI = require('./account.api');
var CategoryAPI = require('./category.api');
var FeedbackAPI = require('./feedback.api');
var ManufacturerAPI = require('./manufacturer.api');
var ProductAPI = require('./product.api');
var ProductphotoAPI = require('./product_photo.api');
var RoleAPI = require('./role.api');
var UserAPI = require('./user.api');
var ShopAPI = require('./shop.api');


//Router for account
router.get('/account/findAll', AccountAPI.findAll);
router.get('/account/findById/:id', AccountAPI.findById);
//router.post('/account/create', AccountAPI.create);
router.delete('/account/delete/:id', requireRole(SuperAdmin), AccountAPI.delete);
router.put('/account/update', requireRole(SuperAdmin), AccountAPI.update);
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
router.get('/product/count', ProductAPI.count);

//router.get('/product/findByStatus',ProductAPI.findByStatus);
//router.get('/product/test',ProductAPI.test);

//Router for productphoto
router.get('/product/findByProduct/:id', ProductphotoAPI.findByProduct);
router.get('/product/findByProductTest/', ProductphotoAPI.findByProductTest);


//Router for Role
router.get('/role/findAll', RoleAPI.findAll);

router.post('/role/create', RoleAPI.create);
router.delete('/role/delete/:id', RoleAPI.delete);
router.put('/role/update', RoleAPI.update);

//Router for User
router.get('/user/findAll', UserAPI.findAll);
router.get('/user/find/:id', UserAPI.find);
//router.post('/user/create', UserAPI.create);
router.delete('/user/delete/:id', UserAPI.delete);
router.put('/user/update', UserAPI.update);
router.post('/user/login', UserAPI.login);
router.get('/user/count', UserAPI.count);



//Router for Shop
router.get('/shop/findAll', ShopAPI.findAll);
router.get('/shop/count', ShopAPI.count);
router.get('/shop/findById/:id', ShopAPI.findById);
router.get('/shop/findbyuser', ShopAPI.findbyuser);


//router.post('/shop/create', ShopAPI.create);
router.delete('/shop/delete/:id', ShopAPI.delete);
router.put('/shop/update', ShopAPI.update);



//upload hinh cho ProductPhoto
router.put("/product/updateimage/:id", upload.fields([{ name: 'photosmart', maxCount: 1 }, { name: 'photolarger', maxCount: 1 }]), (req, res, next) => {
  //console.log(req.file);
  const productphoto = new Productphoto({
    id_product: req.params.id,
    photosmart: req.files['photosmart'][0].path,
    photolarger: req.files['photolarger'][0].path
  });
  productphoto
    .save()
    .then(result => {
      console.log(result);
      res.status(200).json({
        message: "Upload  Image successfully",
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({

        error: err
      });
    });
});


//upload hinh cho Account
router.post("/account/create", upload.single('acc_photo'), (req, res, next) => {
  //console.log(req.file);
  const account = new Account({
    acc_firstname: req.body.acc_firstname,
    acc_lastname: req.body.acc_lastname,
    acc_email: req.body.acc_email,
    acc_password: req.body.acc_password,
    acc_phone: req.body.acc_phone,
    acc_photo: req.file.path,
    acc_create: req.body.acc_create,
    status: true,
    role: req.body.role
  });
  account
    .save()
    .then(result => {
      console.log(result);
      res.status(200).json({
        message: "Created account successfully",
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({

        error: err
      });
    });
});


//upload hinh cho User


router.post("/user/create", upload.single('user_photo'), (req, res, next) => {
  //console.log(req.file);
  const user = new User({
    user_firstname: req.body.email,
    user_lastname: req.body.user_lastname,
    user_email: req.body.user_email,
    user_password: req.body.user_password,
    user_phone: req.body.user_phone,
    user_photo: req.file.path,
    user_birthday: req.body.user_birthday,
    user_create: req.body.user_create,
    user_address: req.body.user_address,
    // user_shopactive:request.body.user_shopactive,
    status: true,
    rip_account: false
  });
  user
    .save()
    .then(result => {
      console.log(result);
      res.status(200).json({
        message: "Created User successfully",
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({

        error: err
      });
    });
});

//create cho Product
router.post("/product/create", upload.single('avata'), (req, res, next) => {
  // console.log(req);
  const product = new Product({
      product_name: req.body.product_name,
      product_pricestock: req.body.product_pricestock,
      product_pricesale: req.body.product_pricesale,
      product_manufact: req.body.product_manufact,
      id_shop: req.body.id_shop,
      id_category: req.body.id_category,
      product_datecreate: req.body.product_datecreate,
      product_quickken: req.body.product_quickken,
      product_description: req.body.product_description,
      status: false,
      avata: req.file.path
  });
  product
      .save()
      .then(result => {
          console.log(result);
          res.status(200).json({
              message: "Created product successfully",
          });
      })
      .catch(err => {
          console.log(err);
          res.status(500).json({

              error: err
          });
      });
});






//upload hinh cho Shop 
router.post("/shop/create", upload.single('shop_logo'), (req, res, next) => {
  //console.log(req.file);
  const shop = new Shop({
    shop_name: request.body.shop_name,
    shop_address: request.body.shop_address,
    shop_logo: request.file.path,
    shop_hotline: request.body.shop_hotline,
    shop_title: request.body.shop_title,
    id_user: request.body.id_user,
    shop_datecreate: request.body.shop_datecreate,
    shop_dateusing: request.body.shop_dateusing,
    //id_account: request.body.id_account,
    shop_active: false,
    status: true,
    shop_maincate: request.body.shop_maincate
  });
  shop
    .save()
    .then(result => {
      console.log(result);
      res.status(200).json({
        message: "Created Shop successfully",
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({

        error: err
      });
    });
});
module.exports = router;