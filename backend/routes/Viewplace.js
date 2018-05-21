var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = require('../config/database.js');

//front end calls to the backend API point here:
//https://peaceful-woodland-41811.herokuapp.com/user/Viewplace //allows you to view users at a place
router.post('/Viewplace', function(req, res) {
	var placename = req.body.placename;
	var array =[];
	var query ="SELECT * FROM " + placename;
//goes to database and updates the users hobby and age  new row with username password and passwrod values
//had to change long to longi because resevered word in mysql
//'2', 'huntertest', '40.111', '50.111'

	connection.query(query, function(err, result, field){
			if(err){
				console.log(err);
				res.send({'success': false, 'message': 'errormessage'});
			}
			else{
//get all users at a location and insert them into an array and return the array with usernames
    				console.log(result);
				Object.keys(result).forEach(function(key) {
					var row = result[key];
					array.push(row.username);
					console.log(row.username);
				});
				res.send({ 'success': true, 'user': array});
			}
		});
});
module.exports = router;
