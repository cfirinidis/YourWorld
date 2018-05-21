var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = require('../config/database.js'); //uses the same connection pool as other routes


//https://peaceful-woodland-41811.herokuapp.com/home/Checkin
router.post('/CheckIn', function(req, res) {
	var username = req.body.username;
	var lat = req.body.lat;
	var long = req.body.long;
	var placename = "";

//first finds the place with the lat and long gets the place name and then checks to see if there is a table with that placename
//if there is it adds the user to that table

//if not returns false 
	connection.query("SELECT * FROM place WHERE lat = ? AND longi = ?",
		[lat, long], function(err, row, field){
			if(err){
				console.log(err);
				res.send({'success': false, 'message': 'Could not connect to DB'});
			}
			
			else if(row.length > 0){
				placename = row[0].placename;
    				var tableExist = "SELECT count(*) " + " FROM information_schema.TABLES WHERE " +
						" (TABLE_SCHEMA = 'heroku_e198ec51639eacc') AND (TABLE_NAME = '"+ placename +"')";
				connection.query(tableExist, function(err, row, field){
					if(!err){
						var tableDef = "INSERT INTO "+ placename + " (username) VALUES ('" + username + "')";
						connection.query(tableDef, function(err, row, field){
							if(err){
								if(err.errno == 1062){
									res.send({'success': false, 'message': 'Already checked in'});
								}
								else{
									res.send({'success': false, 'message': err});
									console.log(err);
								}
							}
							else{
								res.send({'success': true, 'message': placename});
							}
	
						});
					}else{
						res.send({'success': false, 'message': 'error'});
					}
				});
			} else{
				res.send({'success': false, 'message': placename+lat+long});
			}
		});
});

module.exports = router;
