const express = require('express');
const router = express.Router();

const UserController = require('./user.controller');
const userController = new UserController();

//==아직은 사용하지 않는 기능들 =================================
// const multerS3 = require('../middlewares/imageUploadMiddleware');
// const multer = new multerS3();
// const loginMiddleware = require('../middlewares/authLoginUserMiddleware');
//==아직은 사용하지 않는 기능들 =================================

// const auth = require('../middlewares/authMiddleware')    //미들웨어는 잠시 보류

// 로그인/
router.post('/signup', userController.signUp);                   //회원가입 하기
router.post('/signup/emailDup', userController.emailDup);          //이메일 중복 체크
router.post('/login', userController.login);                //로그인 하기

module.exports = router;