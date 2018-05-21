var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = require('../config/database.js');

//front end calls to the backend API point here:
//https://peaceful-woodland-41811.herokuapp.com/user/Place //ADDS A PLACE
router.post('/Place', function(req, res) {
	var placename = req.body.placename;
	var lat = req.body.lat;
	var long = req.body.long;

//goes to database and updates the users hobby and age  new row with username password and passwrod values
//had to change long to longi because resevered word in mysql
	connection.query("INSERT INTO place (placename, lat, longi) VALUES (?, ?, ?)",
		[placename, lat, long], function(err, row, field){
			if(err){
				console.log(err);
				res.send({'success': false, 'message': err});
			}
			else{
				res.send({ 'success': true});
			}
		});

	var tableDef = "CREATE TABLE "+ placename + " (username VARCHAR(255) NOT NULL UNIQUE)";

//create a table with our new place name so we can add users to it when we check in

	connection.query(tableDef, function(err, row, field){
			if(err){
				console.log(err);
			}
			else{
				console.log(placename+" created");
			}
	});

});
module.exports = router;
