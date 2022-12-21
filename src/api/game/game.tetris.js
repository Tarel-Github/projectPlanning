//const ChatService = require("./chat.service");

class Tetris {
  //chatService = new ChatService();

  tetris = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      const name = await this.chatService.getName(userId);
      return res.status(200).json({ msg: "닉네임", data: name });
    } catch (err) {
      return res.status(400).json({ msg: "닉네임가져오기 실패" });
    }
  };
}

module.exports = Tetris;
