var financeService = require('./../service/financeService.js');

function codeSession(req,res){
    // console.log(req.body);
    financeService.codeSession(req.body,res)
    // .then((data)=>{
    //     console.log(data);
    //     res.send(data);
    // });
}

module.exports={
    codeSession
}

