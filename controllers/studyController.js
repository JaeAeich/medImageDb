const Study = require("../models/Study");
const { success, error } = require("../utils/responseWrapper");

const getAllStudy = async (req, res) => {
	try {
		await Study.find()
			.then((studies) => {
				res.send(success(200, studies));
			})
			.catch((error) => {
				console.error(error);
			});
	} catch (e) {
		return res.send(error(500, e.message));
	}
};

const createStudy = async (req, res) => {
	try {
		const { name, desc } = req.body;
		if (!name || !desc) {
			res.send(error(404, "all required fields not filled."));
		} else {
			const thisStudy = await Study.create({
				name,
				desc,
			});
			res.send(success(200, "study added"));
		}
	} catch (e) {
		return res.send(error(500, e.message));
	}
};

const updateStudy = async (req, res) => {
	try {
		const id = req.params.studyId;
		if (!id) {
			return res.send(error(404, "Id is required found."));
		}
		const study = await Study.findById(id);
		if (!study) {
			return res.send(error(404, "No such study found."));
		}
		const { name, desc } = req.body;
		const updatedStudy = await Study.updateOne(
			{ _id: id },
			{ $set: { name: name, desc: desc } }
		);
		res.send(success(200, updatedStudy));
	} catch (e) {
		return res.send(error(500, e.message));
	}
};

const deleteStudy = async (req, res) => {
	try {
		const id = req.params.studyId;
		if (!id) {
			return res.send(error(404, "Id is required found."));
		}
		const study = await Study.findById(id);
		if (!study) {
			return res.send(error(404, "No such study found."));
		}
		await Study.deleteOne({ _id: id });
		res.send(success(200, "deltetion successfull!"));
	} catch (e) {
		return res.send(error(500, e.message));
	}
};

module.exports = {
	createStudy,
	getAllStudy,
	updateStudy,
	deleteStudy,
};
