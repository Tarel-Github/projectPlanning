//const { Users, Todo, Comments } = require('../db/models');          //모델 데이터를 가져와야함
// const Project = require("../../db/schemas/project");

class TestRepository {
  //test = new Test();

  //특정 유저의 모든 프로젝트 가져오기
  test = async (userId) => {
    // const getData = await Project.find({ userId: userId });
    const test = "이것은 성공인가 실패인가" + userId;
    return test;
  };
}

module.exports = TestRepository;
