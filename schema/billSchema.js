var db = require('../db/db.js');
var Schema = db.Schema;

var BillSchema = new Schema({
    type: {
        type: Number
    },
    iconSelected: {
        type: Number
    },
    money: {
        type: Number
    },
    notes: {
        type: String
    },
    date: {
        type: String
    },
    getWeek: {
        type: String
    },
    tel: {
        type: String
    },
    createAt: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = db.model('Bill', BillSchema);