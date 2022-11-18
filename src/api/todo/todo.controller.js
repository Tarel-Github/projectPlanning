const TodoService = require("./todo.service");

class TodoController {
  todoService = new TodoService();

  //해당 프로젝트의 모든 투두 가져오기 // 완료
  getTodo = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      const { projectId } = req.params;
      const getTodo = await this.todoService.getTodo(projectId);
      return res.status(200).json({ message: "todo리스트", data: getTodo });
    } catch (err) {
      return res.status(500).json({ message: "getTodo 실패", error: err });
    }
  };

  //새로운 Todo 생성 // 완료
  postTodo = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      const { projectId } = req.params;
      const { title } = req.body;

      const postTodo = await this.todoService.postTodo(projectId, title);
      return res.status(200).json({ message: "postTodo 성공", data: postTodo });
    } catch (err) {
      return res.status(500).json({ message: "postTodo 실패", error: err });
    }
  };

  //todo 수정 //완성
  putTodo = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      const todoId = req.params;
      const { title } = req.body;
      const putTodo = await this.todoService.putTodo(todoId, title);

      if (putTodo.matchedCount === 0) {
        return res.status(400).json({ message: "대상없음", data: putTodo });
      }

      return res.status(200).json({ message: "putTodo 성공", data: putTodo });
    } catch (err) {
      return res.status(500).json({ message: "putTodo 실패", error: err });
    }
  };

  //todo 체크 //완성
  checkTodo = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      const todoId = req.params;
      const { check } = req.body;
      const checkTodo = await this.todoService.checkTodo(todoId, check);

      if (checkTodo.matchedCount === 0) {
        return res.status(400).json({ message: "대상없음", data: checkTodo });
      }

      return res.status(200).json({ message: "check 성공", data: checkTodo });
    } catch (err) {
      return res.status(500).json({ message: "putTodo 실패", error: err });
    }
  };

  //Todo 삭제 // 완성
  deleteTodo = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      const todoId = req.params;
      const deleteTodo = await this.todoService.deleteTodo(todoId);

      if (deleteTodo.deletedCount === 0) {
        return res.status(400).json({ message: "대상없음", data: deleteTodo });
      }

      return res.status(200).json({ message: "Todo 삭제", data: deleteTodo });
    } catch (err) {
      return res.status(500).json({ message: "deleteTodo 실패", error: err });
    }
  };
}

module.exports = TodoController;
