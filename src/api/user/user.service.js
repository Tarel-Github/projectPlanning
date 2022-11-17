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
    if (!user) throw new Error("가입되지 않은 아이디입니다."); //이부분 다시 확인해 볼것

    const passwordVerify = await bcrypt.compare(password, user[0].password);

    if (!passwordVerify) throw new ErrorCustom("비밀번호 오류");

    //액세스 토큰 발급
    const accessToken = jwt.sign(
      { userId: user.userId, userKey: user.userKey },
      process.env.SECRET_KEY
      // {
      //   expiresIn: "100s",
      // }
    );
    //리프레시 토큰 발급, 지속시간 따로 설정할 것
    const refreshToken = jwt.sign({}, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    //발급된 토큰을 반환
    return { accessToken, refreshToken };
  };

  dupCheckEmail = async (email) => {
    //입력받은 이메일을 리포지토리에서 찾아본다.
    const result = await this.userRepository.userFindEmail(email);

    //중복된 값이 있다면 true가 된다. 그 결과를 리턴
    return Boolean(result);
  };
}

module.exports = UserService;
