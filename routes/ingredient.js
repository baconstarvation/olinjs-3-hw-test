
exports.new = function (req, res) {
	console.log("hey thar");
	res.render('ingredient', {
		title: 'enter in an ingredient',
	});
};
