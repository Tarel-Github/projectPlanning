const TodoService = require("./todo.service");

class TodoController {
  todoService = new TodoService();

  getTodo = async (req, res, next) => {
    try {
      //const {userId}= res.locals.user;
      const userId = 1;
      const { projectId } = req.params;
      const getTodo = await this.todoService.getProjectDetail();
      return res.status(200).json({ message: "todo리스트", data: getProject });
    } catch (err) {
      return res.status(500).json({ message: "getTodo 실패", error: err });
    }
  };

  //새로운 Todo 생성 // 완료
  postTodo = async (req, res, next) => {
    try {
      console.log("요청 시작");
      //const {userId}= res.locals.user;
      const userId = 1;
      const { projectId } = req.params;
      const { title } = req.body;

      const postTodo = await this.todoService.postTodo(projectId, title);
      return res.status(200).json({ message: "postTodo 성공", data: postTodo });
    } catch (err) {
      return res.status(500).json({ message: "postTodo 실패", error: err });
    }
  };

  //todo 수정
  putTodo = async (req, res, next) => {
    try {
      //const {userId}= res.locals.user;
      const userId = 1;
    } catch (err) {
      return res.status(500).json({ message: "putTodo 실패", error: err });
    }
  };

  //todo 체크
  checkTodo = async (req, res, next) => {
    try {
      //const {userId}= res.locals.user;
      const userId = 1;
    } catch (err) {
      return res.status(500).json({ message: "putTodo 실패", error: err });
    }
  };

  //Todo 삭제 // 완성
  deleteTodo = async (req, res, next) => {
    try {
      //const {userId}= res.locals.user;
      const userId = 1;
      const todoId = req.params;
      const deleteTodo = await this.todoService.deleteTodo(todoId);

      if (deleteTodo.deletedCount === 0) {
        return res
          .status(400)
          .json({ message: "삭제할 것이 없음", data: deleteTodo });
      }

      return res.status(200).json({ message: "Todo 삭제", data: deleteTodo });
    } catch (err) {
      return res.status(500).json({ message: "deleteTodo 실패", error: err });
    }
  };
}

module.exports = TodoController;
