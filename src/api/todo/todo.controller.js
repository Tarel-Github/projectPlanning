const TodoService = require('./todo.service');

class TodoController {
    todoService = new TodoService();

    getTodo = async (req, res, next) =>{
        try{
            //const {userId}= res.locals.user;
        }catch(err){

        }

    }


    postTodo = async (req, res, next) =>{
        try{
            //const {userId}= res.locals.user;
        }catch(err){

        }

    }


    putTodo = async (req, res, next) =>{
        try{
            //const {userId}= res.locals.user;
        }catch(err){

        }

    }


    deleteTodo = async (req, res, next) =>{
        try{
            //const {userId}= res.locals.user;
        }catch(err){

        }

    }


}

module.exports = TodoController;