const UserService = require('./user.service');

class UserController {
    userService = new UserService();

    //회원가입
    signUp = async (req, res, next) =>{

    }

    //로그인
    login = async (req, res, next) =>{

    }

    //이메일 중복 확인
    emailDup = async (req, res, next) =>{

    }


}

module.exports = UserController;