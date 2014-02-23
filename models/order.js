var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/burgers');


var orderSchema = mongoose.Schema({
	beef: String,
	lettuce: String,
	ketchup: String,
	mustard: String,
	buns: String
});

var Order = mongoose.model('Order', orderSchema);
module.exports = Order;