var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'CONZZ Express TEST' });
});

module.exports = router;
