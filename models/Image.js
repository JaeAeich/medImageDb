const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
	imageId: {
		type: String,
		required: true,
		unique: true,
	},
	fileName: {
		type: String,
		required: true,
	},
	magnification: {
		type: String,
		required: true,
	},
	studyId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Study",
		required: true,
	},
});

module.exports = mongoose.model("Image", imageSchema);
