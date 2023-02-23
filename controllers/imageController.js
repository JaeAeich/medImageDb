const Image = require("../models/Image");
const Study = require("../models/Study");
const { success, error } = require("../utils/responseWrapper");

const getAllImage = async (req, res) => {
	try {
		const images = await Image.find({});
		res.send(success(200, images));
	} catch (e) {
		return res.send(error(500, e.message));
	}
};
const getAllImageOfThisStudy = async (req, res) => {
	try {
		const studyId = req.params.studyId;
		if (!studyId) {
			return res.send(404, "ID not provided in the endpoint.");
		}
		const images = await Image.find({ studyId });
		res.send(success(200, images));
	} catch (e) {
		return res.send(error(500, e.message));
	}
};

const addImageToThisStudy = async (req, res) => {
	try {
		const studyId = req.params.studyId;
		if (!studyId) {
			return res.send(404, "ID not provided in the endpoint.");
		}
		const study = await Study.findById({ _id: studyId });
		if (!study) {
			return res.send(error(404, "No such study exists."));
		}
		const { url, fileName, magnification } = req.body;
		if (!url || !fileName || !magnification) {
			return res.send(error(404, "All fields are required."));
		}
		const image = await Image.create({ url, fileName, magnification, studyId });
		return res.send(success(200, image));
	} catch (e) {
		return res.send(error(500, e.message));
	}
};

const deleteThisImageFromThisStudy = async (req, res) => {
	try {
		const studyId = req.params.studyId;
		const imageId = req.params.imageId;
		if (!studyId || !imageId) {
			return res.send(404, "IDs not provided in the endpoint.");
		}
		const study = Study.findById({ _id: studyId });
		if (!study) {
			return res.send(error(404, "Study not found"));
		}
		const image = Image.find({ imageId, studyId });
		if (!image) {
			return req.send(error(404, "No such image exists."));
		}
		await Image.deleteOne({ _id: imageId });
		res.send(success(200, "Image deleted!"));
	} catch (e) {
		return res.send(error(500, e.message));
	}
};

const updateThisImageOfThisStudy = async (req, res) => {
	try {
		const studyId = req.params.studyId;
		const imageId = req.params.imageId;
		if (!studyId || !imageId) {
			return res.send(404, "IDs not provided in the endpoint.");
		}
		const study = await Study.findById({ _id: studyId });
		if (!study) {
			return res.send(error(404, "Study not found"));
		}
		const { url, fileName, magnification } = req.body;
		const updatedImage = await Image.updateOne(
			{ _id: imageId },
			{ $set: { url, fileName, magnification } }
		);
		res.send(success(200, updatedImage));
	} catch (e) {
		return res.send(error(500, e.message));
	}
};

module.exports = {
	getAllImage,
	getAllImageOfThisStudy,
	addImageToThisStudy,
	deleteThisImageFromThisStudy,
	updateThisImageOfThisStudy,
};
