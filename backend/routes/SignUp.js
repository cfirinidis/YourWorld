var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = require('../config/database.js');

//front end calls to the backend API point here:
//https://peaceful-woodland-41811.herokuapp.com/user/SignUp
router.post('/SignUp', function(req, res) {
	var username = req.body.username;
	var password = req.body.password;
	var email = req.body.email;

//goes to database and inserts new row with username password and passwrod values
	connection.query("INSERT INTO user ( username, password, email) VALUES (?, ?, ?)",
		[username, password, email], function(err, row, field){
			if(err){
				console.log(err);
				res.send({'success': false, 'message': err});
			}
			else{
				res.send({ 'success': true});
			}
		});
});

module.exports = router;
