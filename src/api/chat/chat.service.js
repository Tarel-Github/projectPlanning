const ChatRepository = require("./chat.repository"); //리포지토리의 내용을 가져와야한다.

class ChatService {
  chatRepository = new ChatRepository();

  getName = async (userId) => {
    const getChat = await this.chatRepository.getName(userId);
    return getChat;
  };
}

module.exports = ChatService;
