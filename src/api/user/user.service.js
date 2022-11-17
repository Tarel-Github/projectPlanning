const UserRepository = require("./user.repository"); //리포지토리의 내용을 가져와야한다.
const bcrypt = require("bcrypt"); //비번 암호화 모듈
const jwt = require("jsonwebtoken"); //토큰 발급 모듈
require("dotenv").config();

class UserService {
  userRepository = new UserRepository();

  signUp = async (identifier, password, nickname) => {
    //리포지토리에 전달
    return await this.userRepository.signup(identifier, password, nickname);
  };

  login = async (email, password) => {
    //리포지토리에서 입력받은 이메일이 있는지 찾아본다.
    const loginUser = this.userRepository.userFindEmail(email);

    //리포지토리에서 입력받은 이메일 데이터가 없거나 있더라도 비번이 다르다면
    if (
      !loginUser ||
      !(await bcrypt.compare(password, loginUser.get().password))
    )
      //입력받은 password와 리포서 가져온 비번을 비교
      throw new Error("아이디 혹은 비밀번호가 일치하지 않습니다"); //다르다면 에러를 던짐

    //토큰 발급하여 반환하기
    return jwt.sign(
      {
        userId: loginUser.userId,
        nickname: loginUser.nickname,
        createdAt: loginUser.createdAt,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" } //토큰의 지속시간은 한시간
    );
  };

  dupCheckEmail = async (email) => {
    //입력받은 이메일을 리포지토리에서 찾아본다.
    const result = await this.userRepository.userFindEmail(email);

    //중복된 값이 있다면 true가 된다. 그 결과를 리턴
    return Boolean(result);
  };
}

module.exports = UserService;
