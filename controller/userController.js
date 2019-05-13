let userService = require('../service/userService.js');

function login(req, res) {
    userService.login(req.body).then((data) => {
        res.send(data);
    });
}
function register(req, res) {
    userService.register(req.body).then((data) => {
        res.send(data);
    });
}
function forgetpwd(req, res) {
    userService.forgetpwd(req.body).then((data) => {
        res.send(data);
    });
}
function updateNickname(req, res) {
    userService.updateNickname(req.body).then((data) => {
        res.send(data);
    })
}
function uploadAvatar(req, res) {
    userService.uploadAvatar({ file: req.files, tel: req.body.tel }).then((data) => {
        res.send(data);
    })
}
module.exports = {
    login,
    register,
    forgetpwd,
    updateNickname,
    uploadAvatar
}