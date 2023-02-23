const router = require("express").Router();
const imageController = require("../controllers/imageController");

router.get("/", imageController.getAllImage);
router.get("/:studyId", imageController.getAllImageOfThisStudy);
router.post("/:studyId", imageController.addImageToThisStudy);
router.delete(
	"/:studyId/:imageId",
	imageController.deleteThisImageFromThisStudy
);
router.put("/:studyId/:imageId", imageController.updateThisImageOfThisStudy);

module.exports = router;
