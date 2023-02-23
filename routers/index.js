// routes/index.js (barrel export)

const express = require("express");
const router = express.Router();

const studyRouter = require("./studyRouter"); //all study api
const imageRouter = require("./imageRouter"); //all image api
const annotationRouter = require("./annotationRouter"); //all annotation api


router.use("/study", studyRouter);
router.use("/image", imageRouter);
router.use("/annotation", annotationRouter);

module.exports = router;