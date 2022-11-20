const express = require("express");
const router = express.Router();

const UserController = require("./user.controller");
const userController = new UserController();

const LoginMiddleware = require("../../middleware/LoginMiddleware"); //이거쓰면 홈페이지에서 로그인이 안 됌

//==아직은 사용하지 않는 기능들 =================================
// const multerS3 = require('../middlewares/imageUploadMiddleware');
// const multer = new multerS3();
// const loginMiddleware = require('../middlewares/authLoginUserMiddleware');
//==아직은 사용하지 않는 기능들 =================================

// const auth = require('../middlewares/authMiddleware')    //미들웨어는 잠시 보류

//경로 (/user)
router.post("/signup", userController.signUp); //회원가입 하기
router.post("/signup/dup", userController.dup); //아이디 중복 체크
router.post("/login", userController.login); //로그인 하기

//앞으로 추가해야할 기능들
//카카오 로그인

module.exports = router;
