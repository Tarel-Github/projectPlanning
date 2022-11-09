require('dotenv').config();                       
const express = require("express");              
const cors = require("cors")                   
const router = require('./src/api/index');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors()); 
app.use(express.static("static"))    

app.use('/', router); 

app.listen(process.env.PORT, () => {
  console.log(process.env.PORT + "번 서버를 가동합니다");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━명령 대기중━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
});
