const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const FileController = require("./file.controller");
const fileCon = new FileController();

const auth = require("../../middleware/authMiddleware");

//const upload = require("../../middleware/uploadMiddleware");
//미들웨어로 분리하고 싶으나 실패함, 다음에 다시 도전
const up = multer({
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

//========================================================
//경로(/file)
//모든 파일 열람, 파일 업로드, 파일 수정, 파일 삭제
//router.post("/test", auth, upload.single("name"), fileCon.uploadFile);
router.post("/post/:projectId", auth, up.single("name"), fileCon.uploadFile);

router.get("/get/:projectId", auth, fileCon.getFile);

// router.post("/post/:projectId", auth, fileCon.postFile);
router.put("/put/:planId", auth, fileCon.putFile);
router.delete("/delete/:planId", auth, fileCon.deleteFile);

module.exports = router;
