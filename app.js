const cookieParser = require("cookie-parser");
const express = require("express");
const jwt = require("jsonwebtoken")      
const app = express();
const router = express.Router();
const SECRET_KEY = `customized-secret-key`;
const routes = require('./index');
const cors = require("cors")                              //자신이 아닌 다른 도메인, 다른 프로토콜, 다른 포트에 있는 리소스를 요청하는 장치

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));


app.use(cors());
app.use(express.static("static"))                   //html 파일을 불러오겠다는 뜻이다.

// app.use(errorLogger); // Error Logger
// app.use(errorHandler); // Error Handler

app.use('/', routes); // 라우터 등록


app.listen(4000, () => {
    console.log("장비를 가동합니다");
  });
