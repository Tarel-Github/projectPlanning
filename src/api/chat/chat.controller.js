const ChatService = require("./chat.service");

class ChatController {
  chatService = new ChatService();

  getName = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      const name = await this.chatService.getName(userId);
      return res.status(200).json({ msg: "닉네임", data: name });
    } catch (err) {
      return res.status(400).json({ msg: "닉네임가져오기 실패" });
    }
  };

  //   // 메시지 보내기
  //   sendChat = async (req, res, next) => {
  //     try {
  //       const { userKey: fUser } = res.locals.user;
  //       const { userKey: tUser, title, category, note } = req.body;

  //       //쪽지 생성하고 방만들기
  //       await this.noteService.sendChat(tUser, fUser, title, category, note);
  //       res.status(200).json({ message: "쪽지 전송 완료" });
  //     } catch (error) {
  //       next(error);
  //     }
  //   };

  //   // 메시지 가져오기
  //   getChat = async (req, res, next) => {
  //     try {
  //       const { userKey: fUser } = res.locals.user;
  //       const { userKey: tUser, title, category, note } = req.body;

  //       //쪽지 생성하고 방만들기
  //       await this.noteService.createNoteRoom(
  //         tUser,
  //         fUser,
  //         title,
  //         category,
  //         note
  //       );
  //       res.status(200).json({ message: "쪽지 전송 완료" });
  //     } catch (error) {
  //       next(error);
  //     }
  //   };

  //   roomlist = async (req, res, next) => {
  //     try {
  //       const { userKey } = res.locals.user;

  //       if (userKey == 0) {
  //         return res.status(400).send({ message: "로그인이 필요합니다." });
  //       }

  //       const roomlist = await this.noteService.allRooms(userKey);

  //       return res.status(200).json(roomlist);
  //     } catch (error) {
  //       next(error);
  //     }
  //   };
  //   // 쪽지 목록 페이지
  //   allMyNote = async (req, res, next) => {
  //     const { userKey } = res.locals.user;

  //     try {
  //       const myNotePage = await this.noteService.allMyNote(userKey);
  //       // const test = myNotePage.map((x) => x.recipient)
  //       return res.status(200).json({ myNotePage });
  //     } catch (err) {
  //       next(err);
  //     }
  //   };

  //   // 보낸 쪽지 상세 페이지
  //   roadNotes = async (req, res, next) => {
  //     try {
  //       const { userKey } = res.locals.user;
  //       const { roomId } = req.params;

  //       const { notes, nickname } = await this.noteService.roadNotes(
  //         roomId,
  //         userKey
  //       );
  //       return res.status(200).json({ notes: notes, nickname: nickname });
  //     } catch (err) {
  //       next(err);
  //     }
  //   };

  //   //쪽지방 삭제
  //   deleteRoom = async (req, res, next) => {
  //     try {
  //       const { userKey } = res.locals.user;
  //       const { roomId } = req.params;
  //       const deleteRoom = await this.noteService.deleteRoom(roomId, userKey);

  //       if (!deleteRoom) {
  //         return res.status(400).send({ message: "없는 방입니다." });
  //       }

  //       if (!deleteRoom) {
  //         return res.status(400).send({ message: "권한없음" });
  //       }

  //       return res.status(200).send({ message: "삭제 완료" });
  //     } catch (err) {
  //       next(err);
  //     }
  //   };
}

module.exports = ChatController;
