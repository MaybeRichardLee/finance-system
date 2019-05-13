var axios = require('axios');

var http = {
    get: function(url){
        return axios.get(url)
    }
}

module.exports = http