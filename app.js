const cookieParser = require("cookie-parser");
const express = require("express");
const jwt = require("jsonwebtoken")      
const app = express();
const router = express.Router();
const SECRET_KEY = `customized-secret-key`;
const routes = require('./routes');

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));



// app.use(errorLogger); // Error Logger
// app.use(errorHandler); // Error Handler

app.use('/', routes); // 라우터 등록


app.listen(4000, () => {
    console.log("서버 가동");
  });
