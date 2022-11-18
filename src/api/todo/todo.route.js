const express = require("express");
const router = express.Router();

const TodoController = require("./todo.controller");
const todoController = new TodoController();

const auth = require("../../middleware/authMiddleware");

//경로(/todo)
router.get("/get/:projectId", auth, todoController.getTodo);
router.post("/post/:projectId", auth, todoController.postTodo);
router.put("/put/edit/:todoId", auth, todoController.putTodo);
router.put("/put/check/:todoId", auth, todoController.checkTodo);
router.delete("/delete/:todoId", auth, todoController.deleteTodo);

module.exports = router;

//프로젝트의 하위 기능
//구현 기능: 투두 생성, 투두 수정, 투두 삭제
