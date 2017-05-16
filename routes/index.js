var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/gymsic');
var collection = db.get('music');


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.body.search);
  var rz =   collection.find({}, function(err, music){
		if (err) res.json(500, err);
		else res.json(music);
	});

});

router.post('/', function(req, res, next) {
  //console.log(req.body);
  var search = req.body.search;
  var rz =   collection.find({ $or : [ { "title" : new RegExp(search, 'i') }, {"artist" : new RegExp(search, 'i')} ] } 

  	, function(err, music){
		if (err) res.json(500, err);
		else res.json(music);
	});

});

module.exports = router;
