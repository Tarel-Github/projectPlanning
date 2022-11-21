const express = require("express");
const router = express.Router();
const path = require("path");

const user = require("./user/user.route");
const plan = require("./plan/plan.route");
const project = require("./project/project.route");
const todo = require("./todo/todo.route");

router.use("/user", user);
router.use("/plan", plan);
router.use("/project", project);
router.use("/todo", todo);

//여기에 경로별 사용할 html을 작성
router.get("/", (req, res) => {
  console.log("첫번째 페이지를 출력합니다.");
  res.sendFile(path.join(__dirname, "../../front/html/start.html"));
});

router.get("/login", (req, res) => {
  console.log("로그인 페이지를 출력합니다");
  res.sendFile(path.join(__dirname, "../../front/html/login.html"));
});

router.get("/main", (req, res) => {
  console.log("메인페이지를 출력합니다");
  res.sendFile(path.join(__dirname, "../../front/html/main.html"));
});

router.get("/project/:projectId", (req, res) => {
  console.log("상세보기 페이지를 출력합니다");
  res.sendFile(path.join(__dirname, "../../front/html/project.detail.html"));
});

module.exports = router;
