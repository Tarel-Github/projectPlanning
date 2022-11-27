const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const FileController = require("./file.controller");
const fileController = new FileController();

const auth = require("../../middleware/authMiddleware");

//const upload = require("../../middleware/uploadMiddleware");
//미들웨어로 분리하고 싶으나 실패함, 다음에 다시 도전
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "storage/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});
/*upload.single("name"),*/
//경로(/file)
//모든 파일 열람, 파일 업로드, 파일 수정, 파일 삭제
//router.post("/test", auth, upload.single("name"), fileController.uploadFile);
router.post("/test", auth, upload.single("name"), fileController.uploadFile);

router.get("/get/:projectId", auth, fileController.getFile);

router.post("/post/:projectId", auth, fileController.postFile);
router.put("/put/:planId", auth, fileController.putFile);
router.delete("/delete/:planId", auth, fileController.deleteFile);

module.exports = router;
