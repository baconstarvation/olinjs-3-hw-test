require('../models/models.js');
var Ingredient = models.Ingredient;


exports.new = function (req, res) {
	console.log("hey thar");
	res.render('ingredient', {
		title: 'enter in an ingredient',
	});
};

exports.create = function (req, res) {
	req.body.create; // this could be wrong. { someValue1: 'lkfdg' } shows in console because of console.log(req.body) w/o this here
	// also concerned because a submit doesnt show { someValue2: '12' } cost
	console.log("hello, there.");
	console.log(req.body);
};
