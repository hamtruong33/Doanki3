var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema(
    {
        user_firstname: { type: String, require: true },
        user_lastname: { type: String, require: true },
        user_email: { type: String, require: true },
        user_password: { type: String, require: true },
        user_phone: { type: String, require: true },
        user_photo: String,
        user_birthday: Date,
        user_create: Date,
        user_address: String,
        user_shopactive: Boolean,
        status: Boolean,
        rip_account: Boolean
    },
    {
        versionKey: false
    }
);

module.exports = mongoose.model('User', UserSchema, 'user');