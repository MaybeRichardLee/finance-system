var express = require('express');
var router = express.Router();
var financeController = require('./../controller/financeController.js');

router.post('/codesession', function (req, res, next) {
    financeController.codeSession(req, res);
});

module.exports = router;