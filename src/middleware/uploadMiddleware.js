const multer = require("multer");
const fs = require("fs");
const path = require("path");

module.exports = async (req, res, next) => {
  // try {
  //   fs.readdirSync("storage");
  // } catch (error) {
  //   console.error("저장 폴더가 없어 저장 폴더를 생성합니다.");
  //   fs.mkdirSync("storage");
  // }

  const aa = res.file;
  const name = req.file;
  const { userId } = res.locals.user;
  console.log("================================");
  console.log(aa);
  console.log(name);
  console.log(userId);
  console.log(req.form);
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
  console.log(upload);
  console.log(upload.storage.getFilename);
  next();
};
