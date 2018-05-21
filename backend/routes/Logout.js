var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = require('./config/database.js');

/*
Need to work on this if a user clicks log out button, they go back to the login screen on the front end
woudl like something more robust and secure if time permits

router.get('/logout', function (req, res) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.sendStatus(401);
});

*/
