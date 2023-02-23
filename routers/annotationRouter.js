const express = require("express");
const router = express.Router();
const annotationController = require("../controllers/annotationController");

router.get("/:imageId", annotationController.getAllAnnotationOfThisImage);
router.post("/:imageId", annotationController.addAnnotationToThisImage);
router.delete(
	"/:imageId/:annotationId",
	annotationController.deleteThisAnnotationFromThisImage
);
router.put(
	"/:imageId/:annotationId",
	annotationController.updateThisAnnotationOfThisImage
);

module.exports = router;
