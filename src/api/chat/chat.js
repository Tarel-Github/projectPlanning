//app.js는 frontend를 담당한다. frontend와 backend 폴더를 분리함으로써 보안을 강화한다.
//server.js는 backend를 담당한다.

const express = require("express");
const http = require("http"); //http 방식
const SocketIO = require("socket.io");
//const {Server} = require("socket.io");
//const {instrument} = require("@socket.io/admin-ui");
const app = express();

//html 대신 pug를 통해서 사이트를 표현
app.set("view engine", "pug");

//pug들이 있는 경로를 설정
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));

const htpServer = http.createServer(app); //http 서버
const wsServer = SocketIO(httpServer);

function publicRooms() {
  const {
    sockets: {
      adapter: { sids, rooms },
    },
  } = wsServer;
  // 위 코드는 아래 두 줄과도 같다.
  // const sids = wsServer.socket.adapter.sids;
  // const rooms = wsServer.socket.adapter.rooms;
  const publicRooms = [];
  rooms.forEach((_, key) => {
    if (sids.get(key) === undefined) {
      publicRooms.push(key);
    }
  });
  return publicRooms;
}

function countRoom(roomName) {
  return wsServer.sockets.adapter.rooms.get(roomName)?.size;
}

wsServer.on("connection", (socket) => {
  socket["nickname"] = "익명";
  socket.onAny((event) => {
    console.log(`Socket Event: ${event}`);
  });
  socket.on("enter_room", (roomName, done) => {
    socket.join(roomName); //룸 이름에 접속
    done();
    socket.to(roomName).emit("welcome", socket.nickname, countRoom(roomName)); //이 메시지를 나를 뺀 모두에게 전달
    wsServer.sockets.emit("room_change", publicRooms());
  });
  // setTimeout(() => {
  //   done("백엔드: 메시지를 보냅니다");
  // }, 10000); //10초후, 이 메시지를 전달
  socket.on("disconnecting", () => {
    //disconnecting은 연결이 끊어지기 직전에 실행
    socket.rooms.forEach((room) =>
      socket.to(room).emit("bye", socket.nickname, countRoom(room) - 1)
    );
  });
  socket.on("disconnect", () => {
    wsServer.sockets.emit("room_change", publicRooms());
  });
  socket.on("new_message", (msg, room, done) => {
    socket.to(room).emit("new_message", `${socket.nickname}:${msg}`);
    done(); //이건 호출되면 프론트에서 코드를 실행할 것이다.
  });
  socket.on("nickname", (nickname) => (socket["nickname"] = nickname));
}); //enter_room은 이벤트

const handleListen = () =>
  console.log(`━━━━Listening on http://localhost:3750`); //아래 내용 덕분에 ws://localhost:3750도 구동 된다.

function handleConnection(socket) {
  console.log(socket);
}

const sockets = []; //철자 다름

//app.listen(3750, handleListen);
httpServer.listen(3750, handleListen); //http 서버위에 ws서버도 담겼다.
