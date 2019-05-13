var db = require('../db/db.js');
var Schema = db.Schema;

var UserSchema = new Schema({
    tel: {
        type: String,
        unique: true
    },
    pwd: {
        type: String
    },
    nickname:{
        type: String
    },
    openid:{
        type:String
    },
    avatarUrl:{
        type: String
    },
    createAt: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = db.model('User', UserSchema);