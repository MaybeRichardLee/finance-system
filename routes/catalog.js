var express = require('express');
var router = express.Router();
var catalogController = require('../controller/catalogController.js');

router.get('/catalog', function (req, res, next) {
    catalogController.catalog(req, res);
});

router.post('/savecatalog', function (req, res, next) {
    catalogController.saveCatalog(req, res);
});

router.post('/delcatalog', function (req, res, next) {
    catalogController.delCatalog(req, res);
});

module.exports = router;