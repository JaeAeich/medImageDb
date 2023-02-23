const mongoose = require("mongoose");

const studySchema = mongoose.Schema({
	// studyId: {
	// 	type: String,
	// 	required: true,
	// 	unique: true,
	// },
	name: {
		type: String,
		required: true,
	},
	desc: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Study", studySchema);
