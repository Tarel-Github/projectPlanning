const express = require('express');
const router = express.Router();

const TodoController = require('./todo.controller');
const todoController = new TodoController;

router.get('/', todoController.getTodo);

module.exports = router;


//구현 기능: 프로젝트 생성, 프로젝트 열람, 프로젝트 편집, 프로젝트 삭제