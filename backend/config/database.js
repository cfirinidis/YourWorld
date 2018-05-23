var mysql = require('mysql');

//connection to the cleardb via heroku addons
//heroku user has credentials provbided by heroku when you addon databases to you heroku app
//these are the generated values
var connection = mysql.createPool({

});

module.exports = connection;
