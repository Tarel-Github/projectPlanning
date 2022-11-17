//const { Users, Todo, Comments } = require('../db/models');          //모델 데이터를 가져와야함
const Todo = require("../../db/schemas/todo");
const Project = require("../../db/schemas/project");

class TodoRepository {
  project = new Project();

  getTodo = async (projectId) => {
    console.log("리포 진행??");
    console.log(projectId);
    const getData = await Todo.find({ projectId: projectId });
    return getData;
  };

  //새로온 todo 작성하기
  postTodo = async (projectId, title) => {
    const date = new Date();
    let createdAt = date;
    let updatedAt = createdAt;
    let todoId = date.valueOf();
    let check = false;
    const postTodo = Todo.create({
      todoId,
      projectId,
      title,
      check,
      createdAt,
      updatedAt,
    });
    return postTodo;
  };

  //기존 투두 수정하기
  putTodo = async (todoId, title) => {
    const putTodo = Todo.updateOne(
      { todoId: todoId.todoId },
      { $set: { title } }
    );
    return putTodo;
  };

  //기존 체크 수정하기
  checkTodo = async (todoId, check) => {
    const checkTodo = Todo.updateOne(
      { todoId: todoId.todoId },
      { $set: { check } }
    );
    return checkTodo;
  };

  //기존 투두 삭제하기
  deleteTodo = async (todoId) => {
    const deleteTodo = Todo.remove(todoId);
    return deleteTodo;
  };
}

module.exports = TodoRepository;
