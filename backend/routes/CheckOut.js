var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = require('../config/database.js'); //uses the same connection pool as other routes


//https://peaceful-woodland-41811.herokuapp.com/home/CheckOut
router.post('/CheckOut', function(req, res) {
	var username = req.body.username;
	var placename = req.body.placename;


//first finds the place with the lat and long gets the place name and then checks to see if there is a table with that placename
//if there is it adds the user to that table

//if not returns false 
	var tableDef = "DELETE FROM "+ placename + " WHERE username = '" + username + "'";
	connection.query(tableDef, function(err, row, field){
		if(err){
			console.log(err);
			res.send({'success': false, 'message': 'Could not connect to DB'});
		}
		else{
			res.send({ 'success': true, 'message': 'User checked out of '+placename});
		}
	});
});

module.exports = router;
