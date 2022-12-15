const SocketIO = require("socket.io");
class SocketIoChat {
  // //아답터 기능을 사용하기 위한 부분이다.
  // //서버 컴퓨터가 여러대고 각기 다른 컴퓨터로 접속할 경우를 위한 부분
  // function publicRooms() {
  //   // const sids = server.sockets.adapter.sids;
  //   // const rooms = server.sockets.adapter.rooms;
  //   // 윗 코드 두 줄은 아래 코드 const~~ = server와 같다.
  //   const {
  //     sockets: {
  //       adapter: { sids, rooms },
  //     },
  //   } = server;
  //   const publicRooms = [];
  //   rooms.forEach((_, key) => {
  //     if (sids.get(key) === undefined) {
  //       publicRooms.push(key);
  //     }
  //   });
  //   return publicRooms;
  // }
  // //방안에 몇명이나 있는지 세주는 함수
  // function countUser(roomName) {
  //   return server.sockets.adapter.rooms.get(roomName)?.size;
  // }
  // server.on("connection", (socket) => {
  //   socket["nickname"] = "익명";
  //   socket.onAny((event) => {
  //     //아래 콘솔은 위의 publicRooms함수를 이해하기 위한 용도
  //     console.log(server.sockets.adapter);
  //     console.log(`Socket Event:${event}`);
  //   });
  //   socket.on("enter_room", (roomName, showRoom) => {
  //     // console.log(roomName);
  //     // socket.join(roomName);
  //     showRoom(roomName);
  //     //welcome이벤트를 roomName에 있는 모든 사람들에게 emit
  //     socket.to(roomName).emit("welcome", socket.nicknam, countUser(roomName));
  //     server.sockets.emit("room_change", publicRooms());
  //   });
  //   //누군가 챗방에서 나가면 실행 됌
  //   socket.on("disconnecting", () => {
  //     //주의사항!!! 버전이 바뀌면서 문법이 바뀌었음!!
  //     //socket.rooms.forEach를 Object.keys(socket.rooms).forEach로 변경!!
  //     Object.keys(socket.rooms).forEach((room) =>
  //       socket.to(room).emit("bye", socket.nickname, countUser(roomName) - 1)
  //     );
  //   });
  //   socket.on("disconnect", () => {
  //     server.sockets.emit("room_change", publicRooms());
  //   });
  //   //done은 프론트에서 실행된다.
  //   socket.on("newMessage", (msg, room, done) => {
  //     socket.to(room).emit("newMessage", `${socket.nickname}: ${msg}`);
  //     done();
  //   });
  //   socket.on("nickname", (nickname) => (socket["nickname"] = nickname));
  // });
}

module.exports = SocketIoChat;
