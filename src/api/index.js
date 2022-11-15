const express = require("express");
const router = express.Router();
const path = require("path");

const user = require("./user/user.route");
//const plan = require('./plan/plan.route');
const project = require("./project/project.route");
//const todo = require('./todo/todo.route');

router.use("/user", user);
//router.use('/post', plan);
router.use("/project", project);
//router.use('/todo', todo);

//여기에 경로별 사용할 html을 작성
router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../../front/html/start.html"));
});

module.exports = router;
