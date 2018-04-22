var mongoose = require('mongoose');
var ListShopSchema = new mongoose.Schema(
    {
        shop_name: [{ type: String, require: true }],
        shop_address: [{ type: String, require: true }],
        shop_logo: String,
        shop_hotline: [{ type: String, require: true }],
        shop_title: String,
        user_lastname: String,
        shop_datecreate: Date,
        shop_dateusing: Date,
        username: String,
        shop_active: Boolean,
        status: Boolean,
        shop_maincate: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
    },
    {
        versionKey: false
    }
);


module.exports = mongoose.model('ListShop', ListShopSchema, 'listshop');