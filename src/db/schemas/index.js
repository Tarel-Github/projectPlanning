const mongoose = require("mongoose");       //몽고DB를 쓰겠다는 선언
require("dotenv").config();                 //.env에서 환경변수를 가져옴
const uri = process.env.MONGODB;            //환경변수에서 접속할 MongoDB URL을 가져옴

const connect = () => {                     //DB에 접속
  mongoose.connect(uri, (error) => {
    if (error) console.log("Mongo DB Connect Error");
    else console.log("MongoDB 연결 성공");
  });
};

// 몽구스 Connection에 이벤트 리스너를 삽입
// 에러 발생 시 에러 내용을 기록
mongoose.connection.on("error", (err) => {
  console.error("Mongo DB Connect Error", err);
});

module.exports = connect;
