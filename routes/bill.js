var express = require('express');
var router = express.Router();
var billController = require('../controller/billController.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('finance');
});

router.post('/savebill', function(req, res, next) {
  billController.saveBill(req,res);
});

router.get('/bill', function(req, res, next) {
  billController.getBill(req,res);
});

router.get('/del', function(req, res, next) {
  billController.delBill(req,res);
});

router.get('/getdatabyid', function(req, res, next) {
  billController.getDataById(req,res);
});

router.post('/modifybill', function(req, res, next) {
  billController.modifyBill(req,res);
});

router.get('/search', function(req, res, next) {
  billController.search(req,res);
});

module.exports = router;
