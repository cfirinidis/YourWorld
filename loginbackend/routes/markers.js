var express = require('express');
var router = express.Router();
var mysql = require('mysql');


var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Knicks',
	database: 'markers',
});

router.post('/', function(req, res, next) {
  
	var user_id = req.body.user_id;
	var latitude = req.body.latitude;
    var longtitude = req.body.longtitude;
    var title = req.body.title;
    var subtitle = req.body.subtitle;


	connection.query(
			//(?, ?, ?) prevents SQL injection
		"INSERT INTO marker (username , latitude, longitude, ) VALUES (?, ?, ?, ?, ?)",
		[user_id, latitude, longtitude, title, subtitle], function(err, row, field){
			if(err){
				
				console.log(err);
				res.send({'success': false, 'message': 'Could not connect to DB'});
			}
			else{
			res.send({ 'success': true});
			}

		});
});

module.exports = router;