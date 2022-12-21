const TestRepository = require("./test.repository"); //리포지토리의 내용을 가져와야한다.

class TestService {
  testRepository = new TestRepository();

  //특정 유저의 모든 프로젝트 가져오기
  test = async (userId) => {
    const test = await this.testRepository.test(userId);
    return test;
  };
}

module.exports = TestService;
