const express = require("express");
const router = express.Router();

const TodoController = require("./todo.controller");
const todoController = new TodoController();

//경로(/todo)
router.get("/get", todoController.getTodo);
router.post("/post/:projectId", todoController.postTodo);
router.put("/put", todoController.putTodo);
router.delete("/delete/:todoId", todoController.deleteTodo);

module.exports = router;

//프로젝트의 하위 기능
//구현 기능: 투두 생성, 투두 수정, 투두 삭제
