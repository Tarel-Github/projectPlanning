const express = require("express");
const router = express.Router();
const path = require("path");

//주의사항! 백과 프론트가 같은 URL 경로를 사용해선 안 된다.

const user = require("./user/user.route");
const plan = require("./plan/plan.route");
const project = require("./project/project.route");
const todo = require("./todo/todo.route");
const file = require("./file/file.route");
const chat = require("./chat/chat.route");
const test = require("./test/test.route");

router.use("/", user);
router.use("/", plan);
router.use("/", project);
router.use("/", todo);
router.use("/", file);
router.use("/", chat);
router.use("/", test);

//프론트 엔드 HTML 파일 불러오는 부분=======================================================
const front = require("./front");
router.use("/", front);

//여기서부터 이미지==============================================================
const ImageFile = require("./image");
const imageFile = new ImageFile();

router.get("/imgs/:name", imageFile.imageFile);

//여기서부터 채팅==============================================================
// const chat = require("./chat/chat");
// router.use("/", chat);

//끝==================================================================
module.exports = router;
