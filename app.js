require("dotenv").config(); //환경변수(.env)파일을 사용
const express = require("express"); //익스프레스 사용 명령어
//const jwt = require("jsonwebtoken");              //jwt 사용 명령어
const cors = require("cors"); //자신이 아닌 다른 도메인, 다른 프로토콜, 다른 포트에 있는 리소스를 요청하는 장치
const path = require("path");
const multer = require("multer"); //멀터
const http = require("http");
const fs = require("fs"); //멀터
const logger = require("./logger"); //콘솔로그 대체품 logger.info(), logger.error() 형태로 사용
const SocketIO = require("socket.io");

//이미지 업로드 기능 시작=====================

//이미지 업로드 기능 끝=====================

//라우트 기능
const router = require("./src/api/index"); //index 파일 가져옴

//몽고DB 연결
const connect = require("./src/db/schemas/index.js"); //몽구스를 위한 스키마 index 가져옴
connect(); //위에 선언한 connect를 사용

const app = express(); //익스프레스를 app에 정의

app.use(express.json()); //json 파일을 서버 정보 주고 받는 것에 사용한다.
app.use(express.urlencoded({ extended: false }));
app.use(cors()); //cors 사용
app.use(express.static("front")); //front 폴더에 있는 html 파일을 불러오겠다는 뜻이다. 경로를 정할 땐 css파일도 포괄할 수 있는 곳에 경로를 정해주자

// 에러처리는 나중에
// app.use(errorLogger); // Error Logger
// app.use(errorHandler); // Error Handler

app.use("/", router); // 라우터 등록, 라우터에 경로별 HTML을 정의해 둔다.

//채팅 관련 코드 시작=================================================
//채팅 관련 코드 시작=================================================
//채팅 관련 코드 시작=================================================
const httpServer = http.createServer(app);
const server = SocketIO(httpServer);

server.on("connection", (socket) => {
  socket.on("enter_room", (roomName, showRoom) => {
    console.log(roomName);
    socket.join(roomName);
    showRoom(roomName);
    //welcome이벤트를 roomName에 있는 모든 사람들에게 emit
    socket.to(roomName).emit("welcome");
  });

  //누군가 챗방에서 나가면 실행 됌
  socket.on("disconnecting", () => {
    //주의사항!!! 버전이 바뀌면서 문법이 바뀌었음!!
    //socket.rooms.forEach를 Object.keys(socket.rooms).forEach로 변경!!
    Object.keys(socket.rooms).forEach((room) => socket.to(room).emit("bye"));
  });

  //done은 프론트에서 실행된다.
  socket.on("newMessage", (msg, room, done) => {
    socket.to(room).emit("newMessage", msg);
    done();
  });
});

const handleListen = () => {
  console.log(
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━서버 가동 시작━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  );
  console.log("4000번 서버를 가동합니다.");
};

httpServer.listen(4000, handleListen);

// app.listen(process.env.PORT, () => {
//   console.log(
//     "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━서버 가동 시작━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
//   );
//   console.log(process.env.PORT + "번 서버를 가동합니다.");
// });
