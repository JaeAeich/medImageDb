// routes/index.js

const express = require("express");
const router = express.Router();

const studyRouter = require("./studyRouter");
const imageRouter = require("./imageRouter");
const annotationRouter = require("./annotationRouter");


router.use("/study", studyRouter);
router.use("/image", imageRouter);
router.use("/annotation", annotationRouter);

module.exports = router;