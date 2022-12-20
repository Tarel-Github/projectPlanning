const UserRepository = require("./user.repository"); //리포지토리의 내용을 가져와야한다.

const bcrypt = require("bcrypt"); //비번 암호화 모듈
const jwt = require("jsonwebtoken"); //토큰 발급 모듈
require("dotenv").config();

class UserService {
  userRepository = new UserRepository();

  //회원가입
  signUp = async (identifier, password, nickname) => {
    return await this.userRepository.signup(identifier, password, nickname);
  };

  //유저 검증
  verifyUser = async (identifier, password) => {
    const user = await this.userRepository.findIdentifier(identifier);
    if (!user) throw new Error("가입되지 않은 아이디입니다."); //이부분 다시 확인해 볼것, 없어도 될듯?
    const passwordVerify = await bcrypt.compare(password, user[0].password);
    if (!passwordVerify) throw new ErrorCustom("비밀번호 오류"); //없어도 될듯??

    //액세스 토큰 발급
    const accessToken = jwt.sign(
      { identifier: user[0].identifier, userId: user[0].userId },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
    //리프레시 토큰 발급, 지속시간 따로 설정할 것
    const refreshToken = jwt.sign({}, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    //발급된 토큰을 반환
    return { accessToken, refreshToken };
  };

  dup = async (identifier) => {
    const result = await this.userRepository.dup(identifier);
    //중복된 값이 있다면 true가 된다. 그 결과를 리턴
    return Boolean(result);
  };
}

module.exports = UserService;
