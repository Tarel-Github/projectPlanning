//const { Users, Posts, Comments } = require('../db/models');          //모델 데이터를 가져와야함
const User = require("../../db/schemas/user");

class UserRepository {
  //회원가입 데이터를 저장
  signup = async (identifier, password, nickname) => {
    const date = new Date();
    let createdAt = date;
    let updatedAt = createdAt;
    let userId = date.valueOf();

    const newUser = User.create({
      userId,
      identifier,
      password,
      nickname,
      createdAt,
      updatedAt,
    });

    const message = "회원가입 성공"; //데이터는 반환하지 않음
    return message;
  };

  //로그인시 들어온 요청에 따라 계정정보 가져옴
  findIdentifier = async (identifier) => {
    return await User.find({ identifier: identifier });
  };

  //유저 이메일 파일을 가져옴
  userFindEmail = async (email) => {
    return await Users.findOne({ where: { email } });
  };
}

module.exports = UserRepository;
