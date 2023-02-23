const mongoose = require("mongoose");

const annotationSchema = mongoose.Schema({
	annotationId: {
		type: String,
		required: true,
		unique: true,
	},
	annotation: {
		type: String,
		required: true,
	},
	studyId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Study",
		required: true,
	},
	imageId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Image",
		required: true,
	},
});

module.exports = mongoose.model("Annotation", annotationSchema);
