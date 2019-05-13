const config = require('../config/config.js');
const utils = require('../utils/utils.js');
const axios = require('axios');
const http = require('./../axios/axios.js');

const resCode = config.resCode;

function codeSession(options,res) {

    // console.log(options);
    var url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + config.wx.appid + '&secret=' + config.wx.secret + '&js_code=' + options.code + '&grant_type=authorization_code';
    // return http.get(url)
    // return new Promise((resolve, reject) => {
    // var url = 'https://api.weixin.qq.com/sns/jscode2session?appid='+config.wx.appid+'&secret='+config.wx.secret+'&js_code='+options.code+'&grant_type=authorization_code';

    axios.get(url).then((data) => {
        // console.log(data);
        res.send(utils.resultData(resCode.SUCCESS, '', data.data));
        // resolve(utils.resultData(resCode.SUCCESS, '', res));
    }).catch(function (err) {
        res.send(utils.resultData(resCode.ERROR, err));
        // reject();
    });
    // });
}

module.exports = {
    codeSession
}