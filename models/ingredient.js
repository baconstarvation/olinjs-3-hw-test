/*
The problem might be that you're not doing this:

Now add a schema for an ingredient. Every ingredient should have a name and a cost. Make this schema into a model, then export the model using the command:
exports.Ingredient = \<ingredient model\>
*/

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/burgers');


var ingredientSchema = mongoose.Schema({
	name: String,
	cost: Number,
});

var Ingredient = mongoose.model('Ingredient', ingredientSchema);
module.exports = Ingredient;
