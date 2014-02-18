
exports.new = function (req, res) {
	console.log("hey thar");
	res.render('ingredient', {
		title: 'enter in an ingredient',
	});
};

exports.create = function (req, res) {
	// req.body.name;
	// req.body.cost;
	console.log("hello, there.");
};
