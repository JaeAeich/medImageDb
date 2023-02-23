const router = require("express").Router();
const studyController = require("../controllers/studyController");

router.get("/", studyController.getAllStudy);
router.post("/", studyController.createStudy);
router.delete("/:studyId", studyController.deleteStudy);
router.put("/:studyId", studyController.updateStudy);

module.exports = router;
