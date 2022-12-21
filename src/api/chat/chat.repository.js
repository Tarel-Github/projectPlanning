const User = require("../../db/schemas/user");

class ChatRepository {
  getName = async (userId) => {
    const getName = await User.find({ userId: userId });
    console.log(getName);
    const result = getName[0].nickname;
    return result;
  };
}

module.exports = ChatRepository;
