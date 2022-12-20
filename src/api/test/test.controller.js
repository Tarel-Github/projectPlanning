//const ChatService = require("../services/chat.service");

class TestController {
  //chatService = new ChatService();

  get = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      console.log("======================================");
      console.log("=============이거 뭔가================");
      console.log("======================================");
      console.log("======================================");

      console.log(userId);
      return res.status(200).json({ msg: "테스트성공" });
    } catch (err) {}
  };
}

module.exports = TestController;
