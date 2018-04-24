var express = require('express');
var router = express.Router();
var mysql = require('mysql');


var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Knicks',
	database: 'users',
});

router.post('/', function(req, res, next) {
  
	var username = req.body.username;
	var password = req.body.password;
	var email = req.body.email;


	connection.query(

		"INSERT INTO user ( username, password, email) VALUES (?, ?, ?)",
		[username, password, email], function(err, row, field){
			if(err){
				
				console.log(err);
				res.send({'success': false, 'message': 'Could not connect to DB'});
			}
			else{
			res.send({ 'success': true});
			}

		});

	connection.query("SELECT username FROM user GROUP BY username HAVING count(*) > 1",
	[username, password, email], function(err, row, field){
		if(err){
			console.log(err);
			res.send({'success': false, 'message': 'Could not connect to DB'});
		}/*
		if(row != null){
			console.log('Username already already exists.');
			
		}else{
			
			connection.query(

				"INSERT INTO user ( username, password, email) VALUES (?, ?, ?)",
				[username, password, email], function(err, row, field){
					if(err){
						
						console.log(err);
						res.send({'success': false, 'message': 'Could not connect to DB'});
					}
					else{
					res.send({ 'success': true});
					}
		
				});
		
		}
		*/

		console.log('username:' + username);
		console.log('password:' + password);
		console.log('email: ' + email);
		console.log('Heres the error(probably null):' + err);
		console.log('Heres the row:' + row);
		console.log('Heres the field: ' + field);
	});


});

module.exports = router;
