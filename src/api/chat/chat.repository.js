const User = require("../../db/schemas/user");

class ChatRepository {
  getName = async (userId) => {
    const getName = await Chat.find({ userId: userId });
    return getName;
  };
}

module.exports = ChatRepository;
