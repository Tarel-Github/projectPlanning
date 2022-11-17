const TodoRepository = require("./todo.repository"); //리포지토리의 내용을 가져와야한다.

class TodoService {
  todoRepository = new TodoRepository();

  //특정 유저의 모든 투두 가져오기
  getProjectAll = async (userId) => {
    const getProject = await this.todoRepository.getProjectAll(userId);
    return getProject;
  };

  //해당 투두 자세히 보기
  getProjectDetail = async (userId, projectId) => {
    const getProject = await this.todoRepository.getProjectDetail(
      userId,
      projectId
    );
    return getProject;
  };

  //새로온 투두 작성하기//완성
  postTodo = async (projectId, title) => {
    const postTodo = await this.todoRepository.postTodo(projectId, title);
    return postTodo;
  };

  //기존 투두 수정하기
  putTodo = async (userId) => {
    const putTodo = await this.todoRepository.putTodo(userId, projectId);
    return putTodo;
  };

  //기존 투두 삭제하기
  deleteTodo = async (todoId) => {
    const deleteTodo = await this.todoRepository.deleteTodo(todoId);
    console.log(deleteTodo);
    console.log(deleteTodo.deletedCount);
    return deleteTodo;
  };
}

module.exports = TodoService;
