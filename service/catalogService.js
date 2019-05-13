var CatalogSchema = require('../schema/CatalogSchema.js');
const config = require('../config/config.js');
const utils = require('../utils/utils.js');

const resCode = config.resCode;

function catalog(options) {
    return new Promise((resolve, reject) => {
        CatalogSchema.find(options, function (err, doc) {
            if (err) {
                reject(utils.resultData(resCode.ERROR, err));
            } else {
                resolve(utils.resultData(resCode.SUCCESS, '', doc));
            }
        });
    });
}

function saveCatalog(options) {
    return new Promise((resolve, reject) => {
        console.log('save',options);
        CatalogSchema.insertMany(options,(err,doc)=>{
            if (err) {
                reject(utils.resultData(resCode.ERROR, err));
            } else {
                resolve(utils.resultData(resCode.SUCCESS, '', doc));
            }
        });
    });
}

function delCatalog(options) {
    return new Promise((resolve, reject) => {
        CatalogSchema.remove(options, function (err, doc) {
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

module.exports = {
    catalog,
    saveCatalog,
    delCatalog
}