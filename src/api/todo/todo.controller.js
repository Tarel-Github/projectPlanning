const TodoService = require('./todo.service');

class TodoController {
    todoService = new TodoService();

    getTodo = async (req, res, next) =>{

    }


}

module.exports = TodoController;