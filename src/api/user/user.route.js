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

//데이터 베이스는 몽고DB를 사용한다.
//그러나 여기 코드는 MySQL에 맞춰져 있다.
//변환이 필요하다.

//유저는 회원가입, 로그인, 이메일 중복체크


module.exports = router;