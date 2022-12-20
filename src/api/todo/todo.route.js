const express = require("express");
const router = express.Router();

const TodoController = require("./todo.controller");
const todoController = new TodoController();

const auth = require("../../middleware/authMiddleware");

//경로(/todo)
router.get("/todo/get/:projectId", auth, todoController.getTodo);
router.post("/todo/post/:projectId", auth, todoController.postTodo);
router.put("/todo/put/edit/:todoId", auth, todoController.putTodo);
router.put("/todo/put/check/:todoId", auth, todoController.checkTodo);
router.delete("/todo/delete/:todoId", auth, todoController.deleteTodo);

module.exports = router;

//프로젝트의 하위 기능
//구현 기능: 투두 생성, 투두 수정, 투두 삭제
