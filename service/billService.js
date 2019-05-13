var BillSchema = require('../schema/billSchema.js');
const config = require('../config/config.js');
const utils = require('../utils/utils.js');

const resCode = config.resCode;

function saveBill(options) {
    return new Promise((resolve, reject) => {
        BillSchema.insertMany(options, function (err, doc) {
            if (err) {
                reject(utils.resultData(resCode.ERROR, err));
            } else {
                resolve(utils.resultData(resCode.SUCCESS, '', doc));
            }
        });
    });
}

function getBill(options) {
    console.log(options);
    return new Promise((resolve, reject) => {
        const reg = new RegExp(options.date, 'i');
        // console.log(reg);
        var obj = { tel: options.tel, date: reg };
        if (options.type) {
            obj.type = options.type;
        }
        BillSchema.find(obj, function (err, doc) {
            if (err) {
                reject(utils.resultData(resCode.ERROR, err));
            } else {
                resolve(utils.resultData(resCode.SUCCESS, '', doc));
            }
        });
    });
}

function delBill(options) {
    console.log(options);
    return new Promise((resolve, reject) => {
        BillSchema.remove(options, function (err, doc) {
            if (err) {
                reject(utils.resultData(resCode.ERROR, err));
            } else {
                console.log(doc);
                if (doc.n === 1 && doc.deletedCount === 1 && doc.ok === 1) {
                    resolve(utils.resultData(resCode.SUCCESS, '', doc));
                } else {
                    reject(utils.resultData(resCode.ERROR, '删除失败，请重试'));
                }
            }
        })
    });
}

function getDataById(options) {
    return new Promise((resolve, reject) => {
        BillSchema.findOne(options, function (err, doc) {
            if (err) {
                reject(utils.resultData(resCode.ERROR, err));
            } else {
                resolve(utils.resultData(resCode.SUCCESS, '', doc));
            }
        });
    });
}

function modifyBill(options) {
    console.log(options);
    return new Promise((resolve, reject) => {
        BillSchema.updateOne({ _id: options._id }, { $set: options }, function (err, doc) {
            console.log('modify',doc);
            if(err){
                reject(utils.resultData(resCode.ERROR, '账单修改失败，请重试'));
            }else{
                if (doc.n === 1 && doc.nModified === 1 && doc.ok === 1) {
                    resolve(utils.resultData(resCode.SUCCESS, '', doc));
                } else {
                    reject(utils.resultData(resCode.ERROR, '账单修改失败，请重试'));
                }
            }
        });
    });
}

function search(options) {
    return new Promise((resolve, reject) => {
        BillSchema.find(options, (err, doc) => {
            if (err) {
                reject(utils.resultData(resCode.ERROR, err));
            } else {
                resolve(utils.resultData(resCode.SUCCESS, '', doc));
            }
        });
    });
}

module.exports = {
    saveBill,
    getBill,
    delBill,
    getDataById,
    modifyBill,
    search
}