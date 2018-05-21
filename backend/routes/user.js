var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = require('../config/database.js'); //uses the same connection pool as other routes


//https://peaceful-woodland-41811.herokuapp.com/user
router.post('/user', function(req, res) {
	var username = req.body.username;
	var password = req.body.password;

	connection.query("SELECT * FROM user WHERE username = ? AND password = ?",
		[username, password], function(err, row, field){
			if(err){
				console.log(err);
				res.send({'success': false, 'message': 'Could not connect to DB'});
			}

			if(row.length > 0){
				res.send({ 'success': true, 'user': row[0].username});
			} else{
				res.send({'success': false, 'message': 'User Not Found'});
			}
		});
});

module.exports = router;
