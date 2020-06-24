const {Schema, model} = require("mongoose");

const UploadsSchema = new Schema({

	title: String,
	description: String,
	image: String

});

module.exports = model("uploads", UploadsSchema);