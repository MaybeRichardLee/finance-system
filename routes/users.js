var express = require('express');
var multer = require('multer');
var router = express.Router();
var userController = require('./../controller/userController.js');
var utils = require('./../utils/utils.js');
const config = require('../config/config.js');
var storage = utils.storage;
var createFolder = utils.createFolder;
createFolder(config.upload.avatar);
var upload = multer({ storage });

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('users');
});

/**
 * 登录
 */
router.post('/login', function (req, res, next) {
  userController.login(req, res);
});

/**
 * 注册
 */
router.post('/register', function (req, res, next) {
  console.log(req.body, req.params, req.query);
  userController.register(req, res);
});

/**
 * 忘记密码
 */
router.post('/forgetpwd', function (req, res, next) {
  userController.forgetpwd(req, res);
});

router.post('/updatenickname', function (req, res, next) {
  userController.updateNickname(req, res);
});

router.post('/uploadavatar',function (req, res, next) {
  userController.uploadAvatar(req,res);
});

module.exports = router;
