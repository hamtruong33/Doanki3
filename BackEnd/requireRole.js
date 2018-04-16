var jwt = require('jsonwebtoken');
var config = require('./config');
var Account = require('./schemas/account.schema');
//global.atob = require("atob");
var role1 = [];
function requireRole(role1) {
    return function verifyToken(req, res, next) {
        var token = req.headers['x-access-token'];
        if (!token)
            return res.status(403).send({ auth: false, message: 'No token provided.' });
        jwt.verify(token, config.secret, function (err, decoded) {
            if (err)
                return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

            // console.log(decoded.roleId);
            for (var i = 0; i < role1.length; i++) {
                //console.log(role[i]);
                if (decoded.role === role1[i]) {
                    req.accountId = decoded.id;
                    
                    next();

                } 
            }
           // return res.status(403).send({ auth: false, message: 'ban ko co quyen ' });

        });
    }
}
module.exports = requireRole;