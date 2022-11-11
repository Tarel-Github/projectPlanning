const TodoRepository = require("./todo.repository");//리포지토리의 내용을 가져와야한다.

class TodoService {
    todoRepository = new TodoRepository();

}

module.exports = TodoService;