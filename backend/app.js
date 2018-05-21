var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var express = require("express");
var bodyParser = require("body-parser");
var index = require('./routes/index.js');
var Login = require('./routes/user');  //this is for the user login 
var ProfileEdit = require('./routes/Profile.js'); //this edits the users profile
var Place = require('./routes/Place.js'); //this is for creating a place that has not been added to ddatabase
var viewPlace = require('./routes/Viewplace.js'); //this is for creating a place that has not been added to ddatabase
var CheckIn = require('./routes/CheckIn.js'); //user checking into a location
var CheckOut = require('./routes/CheckOut.js'); //user checking out of a location
var SignUp = require('./routes/SignUp'); // signing up 
var connection = require('./config/database.js'); //add to use connection pool this gives connection pol for entire app session
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//add the urls endpoints here ex. yourworld.com/signup yourworld.com/user1 etc 

app.use('/', index);
app.use('/api', Login); //added to front
app.use('/api', SignUp);//added to front
app.use('/home', CheckIn); //added to front
app.use('/home', CheckOut);
app.use('/user', viewPlace);
app.use('/user', Place);
app.use('/user', ProfileEdit); //added to front

module.exports = app;
