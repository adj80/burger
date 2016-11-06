var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
	burger.all(function (data) {
		var hbsObject = { burgers: data};
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.put('/burgers/update/:id' function (req, res) {


});


module.exports = router;