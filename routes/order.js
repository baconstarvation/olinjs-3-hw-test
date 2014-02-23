var Order = require('../models/order');

exports.new = function (req, res) {
	console.log("hey thar");
	res.render('order', {
		title: 'enter in an order',
	});
};

exports.create = function (req, res) {
	req.body.create;
	console.log("hello, there.");
	console.log(req.body);
};
