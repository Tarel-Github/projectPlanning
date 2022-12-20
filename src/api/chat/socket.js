const socketIO = require("socket.io");
const SocketFunction = require("./socketFunction");

module.exports = (server) => {
  socketFunction = new SocketFunction();

  const io = socketIO(server, { path: "/socket.io" });

  // publicRooms = socketFunction.publicRooms(io);
  // countUser = socketFunction.countUser(io);

  io.on("connection", (socket) => {
    console.log("연결???");
    socket["nickname"] = "익명";

    // socket.onAny((event) => {
    //   //아래 콘솔은 위의 publicRooms함수를 이해하기 위한 용도
    //   console.log(io.sockets.adapter);
    //   console.log(`Socket Event:${event}`);
    // });

    socket.on("enter_room", (roomName, showRoom) => {
      console.log(roomName);
      socket.join(roomName);
      console.log("방접속");
      showRoom(roomName);
      //welcome이벤트를 roomName에 있는 모든 사람들에게 emit
      socket
        .to(roomName)
        .emit("welcome", socket.nickname, socketFunction.countUser(io));
      io.sockets.emit("room_change", socketFunction.publicRooms(io));
    });

    //누군가 챗방에서 나가면 실행 됌
    socket.on("disconnecting", () => {
      console.log("방나감");
      //주의사항!!! 버전이 바뀌면서 문법이 바뀌었음!!
      //socket.rooms.forEach를 Object.keys(socket.rooms).forEach로 변경!!
      Object.keys(socket.rooms).forEach((room) =>
        socket.to(room).emit("bye", socket.nickname, countUser(roomName) - 1)
      );
    });

    socket.on("disconnect", () => {
      io.sockets.emit("room_change", socketFunction.publicRooms(io));
    });

    //done은 프론트에서 실행된다.
    socket.on("newMessage", (msg, room, done) => {
      socket.to(room).emit("newMessage", `${socket.nickname}: ${msg}`);
      done();
    });
    socket.on("nickname", (nickname) => (socket["nickname"] = nickname));
  });
};
