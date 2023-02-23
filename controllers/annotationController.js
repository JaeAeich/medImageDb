const Image = require("../models/Image");
const Annotation = require("../models/Annotations");
const { success, error } = require("../utils/responseWrapper");

const getAllAnnotationOfThisImage = async (req, res) => {
	try {
		const imageId = req.params.imageId;
		if (!imageId) {
			return res.send(error(404, "ID not provided in the endpoint."));
		}
		const annotations = await Annotation.find({ imageId });
		res.send(success(200, annotations));
	} catch (e) {
		return res.send(error(500, e.message));
	}
};

const addAnnotationToThisImage = async (req, res) => {
	try {
		const imageId = req.params.imageId;
		if (!imageId) {
			return res.send(error(404, "ID not provided in the endpoint."));
		}
		const image = await Image.findById(imageId);
		if (!image) {
			return res.send(error(404, "No such image exists."));
		}
		const studyId = image.studyId;
		const { annotation } = req.body;
		if (!annotation) {
			return res.send(error(400, "All fields are required."));
		}
		const newAnnotation = await Annotation.create({
			annotation,
			imageId,
			studyId,
		});
		return res.send(success(200, newAnnotation));
	} catch (e) {
		return res.send(error(500, e.message));
	}
};

const deleteThisAnnotationFromThisImage = async (req, res) => {
	try {
		const annotationId = req.params.annotationId;
		const imageId = req.params.imageId;
		if (!annotationId || !imageId) {
			return res.send(error(404, "IDs not provided in the endpoint."));
		}
		const image = await Image.findById(imageId);
		if (!image) {
			return res.send(error(404, "Image not found"));
		}
		const annotation = await Annotation.findOne({ _id: annotationId, imageId });
		if (!annotation) {
			return res.send(error(404, "No such annotation exists."));
		}
		await Annotation.deleteOne({ _id: annotationId });
		res.send(success(200, "Annotation deleted!"));
	} catch (e) {
		return res.send(error(500, e.message));
	}
};

const updateThisAnnotationOfThisImage = async (req, res) => {
	try {
		const annotationId = req.params.annotationId;
		const imageId = req.params.imageId;
		if (!annotationId || !imageId) {
			return res.send(error(404, "IDs not provided in the endpoint."));
		}
		const image = await Image.findById(imageId);
		if (!image) {
			return res.send(error(404, "Image not found"));
		}
		const { annotation } = req.body;
		const updatedAnnotation = await Annotation.updateOne(
			{ _id: annotationId, imageId },
			{ $set: { annotation } }
		);
		res.send(success(200, updatedAnnotation));
	} catch (e) {
		return res.send(error(500, e.message));
	}
};

module.exports = {
	getAllAnnotationOfThisImage,
	addAnnotationToThisImage,
	deleteThisAnnotationFromThisImage,
	updateThisAnnotationOfThisImage,
};
