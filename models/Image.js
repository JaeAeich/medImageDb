const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
	url: {
		type: String,
		required: true,
	},
	fileName: {
		type: String,
		required: true,
	},
	magnification: {
		type: Number,
		required: true,
	},
	studyId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Study",
		required: true,
	},
});

module.exports = mongoose.model("Image", imageSchema);
