var UserSchema = require('../schema/userSchema.js');
const config = require('../config/config.js');
const utils = require('../utils/utils.js');
var fs = require('fs');


const resCode = config.resCode;
var uploadFolder = './upload/';

function login(options) {
    console.log('8', options);
    return new Promise((resolve, reject) => {
        UserSchema.findOne(options, function (err, doc) {
            if (err) {
                reject(utils.resultData(resCode.ERROR, err));
            } else {
                console.log('14- ', doc)
                if (doc) {
                    doc.pwd = '';
                    resolve(utils.resultData(resCode.SUCCESS, '', doc));
                    return;
                }
                resolve(utils.resultData(resCode.ERROR, '密码错误', doc));
            }
        })
    });
}

function register(options) {
    console.log('options= ', options);
    return new Promise((resolve, reject) => {
        // var obj = options;
        options.nickname = Math.random().toString(36).substr(2);
        UserSchema.insertMany(options, function (err, doc) {
            if (err) {
                reject(utils.resultData(resCode.ERROR, err));
            } else {
                resolve(utils.resultData(resCode.SUCCESS, '', doc));
            }
        });
    });
}

function forgetpwd(options) {
    return new Promise((resolve, reject) => {
        UserSchema.updateOne({ tel: options.tel }, { $set: { pwd: options.pwd } }, (err, doc) => {
            if (err) {
                reject(utils.resultData(resCode.ERROR, err));
            } else {
                if (doc.n === 1 && doc.nModified === 1 && doc.ok === 1) {
                    resolve(utils.resultData(resCode.SUCCESS, '', doc));
                } else {
                    reject(utils.resultData(resCode.ERROR, '密码修改失败，请重试'));
                }
            }
        })
    })
}

function updateNickname(options) {
    return new Promise((resolve, reject) => {
        UserSchema.updateOne({ tel: options.tel }, { $set: { nickname: options.nickname } }, (err, doc) => {
            console.log(doc);
            if (err) {
                reject(utils.resultData(resCode.ERROR, err));
            } else {
                if (doc.n === 1 && doc.nModified === 1 && doc.ok === 1) {
                    resolve(utils.resultData(resCode.SUCCESS, '', doc));
                } else {
                    reject(utils.resultData(resCode.ERROR, '昵称修改失败，请重试'));
                }
            }
        })
    });
}
function uploadAvatar(options) {
    console.log(options);
    return new Promise((resolve, reject) => {
        let avatar = options.file.avatar;
        var path = options.tel + '.jpg';
        var avatarUrl = 'upload/' + options.tel + '.jpg';
        avatar.mv(avatarUrl, function (e) {
            if (e) {
                reject(utils.resultData(resCode.ERROR, e));
            } else {
                UserSchema.updateOne({ tel: options.tel }, { $set: { avatarUrl: path } }, (err, doc) => {
                    console.log(doc);
                    if (err) {
                        console.log('dss');
                        reject(utils.resultData(resCode.ERROR, err));
                    } else {
                        if (doc.n === 1 && doc.ok === 1) {
                            resolve(utils.resultData(resCode.SUCCESS, '', doc));
                        } else {
                            reject(utils.resultData(resCode.ERROR, '头像上传失败，请重试'));
                        }
                    }
                })
            }
        });
    });
}



module.exports = {
    login,
    register,
    forgetpwd,
    updateNickname,
    uploadAvatar
}