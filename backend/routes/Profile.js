var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = require('../config/database.js');

//front end calls to the backend API point here:
//https://peaceful-woodland-41811.herokuapp.com/user/Profile
router.post('/Profile', function(req, res) {
	var hobby = "";
	var age;
	var username = req.body.username;
	hobby = req.body.hobby;
	age = req.body.age;

	var query = "UPDATE user SET hobby = '" + hobby + "' , age = '" + age + "' WHERE username = '" + username +"'";
//goes to database and updates the users hobby and age  new row with username password and passwrod values
//
	connection.query(query, function(err, row, field){
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
