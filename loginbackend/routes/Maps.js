var express = require('express');
var router = express.Router();
var mysql = require('mysql');


var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Knicks',
	database: 'users',

});


console.log("here");
	
router.post('/', function(req, res, next) {
  
	var lat = req.body.lat;
	var lng = req.body.lng;
	console.log(lat);

	
	connection.query(

		"UPDATE user SET lat = ? WHERE lat= ?",
		[lat, lat],
		"UPDATE user SET lng =? WHERE lng = ?"
		[lng, lng],
		 function(err, row, field){
			if(err){
				
				console.log(err);
				res.send({'success': false, 'message': 'Could not update location'});
			}
			// if(row.length > 0){
			// 	res.send({ 'success': true, 'user': row[0].username});
			// }
			else{
		
			res.send({ 'success': true});
			}

		});
});


module.exports = router;
