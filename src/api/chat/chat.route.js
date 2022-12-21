const express = require("express");
const router = express.Router();

const ChatController = require("./chat.controller");
const chatController = new ChatController();

const auth = require("../../middleware/authMiddleware");

router.get("/main/chatName", auth, chatController.getName);

// //메시지 가져오기
// router.get("/chat/getChat", auth, chatController.getChat);

// //메시지 보내기
// router.post("/chat/sendChat", auth, chatController.sendChat);

// //방 조회
// router.get("/chat/room", auth, chatController.getchat);

// //방 삭제
// router.delete("/delete/:chatId", auth, chatController.deletechat);

module.exports = router;
