//여기서부터 프론트엔드====================================================================
//여기에 경로별 사용할 html을 작성

const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  console.log("첫번째 페이지를 출력합니다.");
  res.sendFile(path.join(__dirname, "../../front/start/start.html"));
});

router.get("/login", (req, res) => {
  console.log("로그인 페이지를 출력합니다");
  res.sendFile(path.join(__dirname, "../../front/start/login.html"));
});

router.get("/main", (req, res) => {
  console.log("메인페이지를 출력합니다");
  res.sendFile(path.join(__dirname, "../../front/start/main.html"));
});

router.get("/project/:projectId", (req, res) => {
  console.log("프로젝트 상세보기 페이지를 출력합니다");
  res.sendFile(path.join(__dirname, "../../front/project/project.detail.html"));
});

// router.get("/project/detail/:planId", (req, res) => {
//   console.log("플렌 상세보기 페이지를 출력합니다");
//   res.sendFile(
//     path.join(__dirname, "../../front/html/project.detail.plan.html")
//   );
// });

router.get("/project/detail/postPlan/:projectId", (req, res) => {
  console.log("플렌 작성하기 페이지를 출력합니다");
  res.sendFile(path.join(__dirname, "../../front/project/plan.post.html"));
});

router.get("/project/detail/postFile/:projectId", (req, res) => {
  console.log("파일 작성하기 페이지를 출력합니다");
  res.sendFile(path.join(__dirname, "../../front/project/file.post.html"));
});

router.get("/project/detail/put/:planId", (req, res) => {
  console.log("플렌 수정하기 페이지를 출력합니다");
  res.sendFile(path.join(__dirname, "../../front/project/plan.put.html"));
});

router.get("/chat", (req, res) => {
  console.log("채팅페이지를 출력합니다.");
  res.sendFile(path.join(__dirname, "../../front/chat/chat.html"));
});

router.get("/chat2", (req, res) => {
  console.log("채팅페이지2를 출력합니다.");
  res.sendFile(path.join(__dirname, "../../front/chat/chat_2.html"));
});

router.get("/test", (req, res) => {
  console.log("테스트를 출력합니다.");
  res.sendFile(path.join(__dirname, "../../front/chat/test.html"));
});

module.exports = router;
//================================================================
