require('dotenv').config();                       //환경변수(.env)파일을 사용
const express = require("express");               //익스프레스 사용 명령어
//const jwt = require("jsonwebtoken");              //jwt 사용 명령어
const cors = require("cors")                      //자신이 아닌 다른 도메인, 다른 프로토콜, 다른 포트에 있는 리소스를 요청하는 장치

const router = require('./src/api/index');                //index 파일 가져옴
//const connect = require("./schemas/index.js");   //몽구스를 위한 스키마 index 가져옴

const app = express();                            //익스프레스를 app에 정의

//connect();    //위에 선언한 connect를 사용

app.use(express.json());                          //json 파일을 서버 정보 주고 받는 것에 사용한다.
app.use(express.urlencoded({extended:false}));
app.use(cors());                                    //cors 사용
app.use(express.static("static"))                   //html 파일을 불러오겠다는 뜻이다.

// app.use(errorLogger); // Error Logger
// app.use(errorHandler); // Error Handler

app.use('/', router); // 라우터 등록

app.listen(process.env.PORT, () => {
  console.log(process.env.PORT + "번 서버를 가동합니다");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━명령 대기중━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
});
