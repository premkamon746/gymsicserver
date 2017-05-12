var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/gymsic');
var collection = db.get('music');

/* GET home page. */
router.post('/', function(req, res, next) {
  var rz =   collection.find({}, function(err, music){
		if (err) res.json(500, err);
		else res.json(music);
	});

});

module.exports = router;
