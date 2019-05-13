var catalogService = require('./../service/catalogService.js');

function catalog(req, res) {
    catalogService.catalog(req.query).then((data) => {
        res.send(data);
    });
}

function saveCatalog(req, res) {
    // console.log('res.body  ',req.body);
    catalogService.saveCatalog(req.body).then((data) => {
        res.send(data);
    });
}

function delCatalog(req, res) {
    catalogService.delCatalog(req.body).then((data) => {
        res.send(data);
    });
}

module.exports = {
    catalog,
    saveCatalog,
    delCatalog
}