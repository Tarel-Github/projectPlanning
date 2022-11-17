//const { Users, Todo, Comments } = require('../db/models');          //모델 데이터를 가져와야함
const Todo = require("../../db/schemas/todo");
const Project = require("../../db/schemas/project");

class TodoRepository {
  project = new Project();

  getProjectAll = async (userId) => {
    const getData = await project.getProject(userId);
    return getData;
  };

  getProjectDetail = async (userId, projectId) => {
    const getData = await project.getProject(userId, projectId);
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

  //기존 프로젝트 수정하기
  putProject = async (userId) => {
    const putProject = await this.projectRepository.putProject(userId);
    return putProject;
  };

  //기존 투두 삭제하기
  deleteTodo = async (todoId) => {
    const deleteTodo = Todo.remove(todoId);
    return deleteTodo;
  };
}

module.exports = TodoRepository;
