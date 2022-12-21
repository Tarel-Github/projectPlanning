const TestService = require("./test.service");

class TestController {
  testService = new TestService();

  getTest = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      //const userId = 1;
      console.log("======================================");
      console.log("=============이거 뭔가================");
      console.log("======================================");
      console.log("======================================");

      const test = await this.testService.test(userId);

      console.log(userId);
      return res.status(200).json({ msg: "테스트성공", data: test });
    } catch (err) {}
  };
}

module.exports = TestController;
