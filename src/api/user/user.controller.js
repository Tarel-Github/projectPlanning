const UserService = require("./user.service");
const joi = require("../../util/joi");
const bcrypt = require("bcrypt");

//회원가입시 입력 데이터가 조건에 부합하는지 체크
// const {
//   signupSchema,
//   emailDupSchema,
//   loginSchema,
// } = require("../../util/validation");

class UserController {
  userService = new UserService();

  //회원가입//완료
  signUp = async (req, res, next) => {
    try {
      const { identifier, password, confirm, nickname } =
        await joi.signupSchema.validateAsync(req.body);

      //받은 비밀번호를 암호화, 환경변수 값은 암호화 연산의 정도로 높을 수록 암호화가 높음
      //받은 비번은 컨트롤러에서 바로 암호화하여 보안을 높임
      const hashed = await bcrypt.hash(password, 12);

      if (password !== confirm)
        throw new Error("비밀번호와 확인란이 일치하지 않습니다");

      await this.userService.signUp(identifier, hashed, nickname);

      return res.status(201).json({ message: "회원가입 성공" });
    } catch (err) {
      return res.status(500).json({ message: "회원가입 실패", error: err });
      //next(err)
    }
  };

  //로그인
  login = async (req, res, next) => {
    try {
      const { identifier, password } = req.body;

      //받아온 파일들로 유저 검증을 하고, 통과하면 토큰을 발급한다.
      const { accessToken, refreshToken } = await this.userService.verifyUser(
        identifier,
        password
      );

      //레디스에 리프레시 토큰을 넘기는 명령은 보류//await redisCli.set(userId, refreshToken);

      res.cookie("accesstoken", accessToken);
      res.cookie("refreshtoken", refreshToken);

      return res
        .status(200)
        .json({ accessToken, refreshToken, message: "로그인" });
    } catch (err) {
      return res.status(500).json({ message: "로그인 실패", error: err });
    }
  };

  //아이디 중복 확인
  dup = async (req, res, next) => {
    try {
      const { identifier } = req.body;

      //이메일 내용이 공백일 경우
      if (identifier == "") throw new Error("아이디를 입력해 주세요");

      //이메일을 중복확인을 하는 서비스로 보내기
      const dup = await this.userService.dup(identifier);
      //중복이라면 값이 true가 나온다.

      if (dup) {
        return res.status(400).json({ errorMessage: "중복 Id입니다" });
      } else {
        return res.status(200).json({ message: "사용 가능한 Id입니다" });
      }
    } catch (error) {
      return res.status(500).json({ message: "중복확인 실패", error: err });
    }
  };
}

module.exports = UserController;
