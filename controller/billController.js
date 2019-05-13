var billService = require('./../service/billService.js');

function saveBill(req, res){
    billService.saveBill(req.body).then((data)=>{
        res.send(data);
    });
}

function getBill(req, res){
    billService.getBill(req.query).then((data)=>{
        res.send(data);
    });
}

function delBill(req, res){
    billService.delBill(req.query).then((data)=>{
        res.send(data);
    });
}

function getDataById(req, res){
    billService.getDataById(req.query).then((data)=>{
        res.send(data);
    });
}
function modifyBill(req, res){
    billService.modifyBill(req.body).then((data)=>{
        res.send(data);
    });
}
function search(req, res){
    billService.search(req.query).then((data)=>{
        res.send(data);
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