const TodoService = require('./todo.service');

class TodoController {
    todoService = new TodoService();

    getTodo = async (req, res, next) =>{
        try{
            //const {userId}= res.locals.user;
            const userId = 1;
            const { projectId } = req.params;
            const getProject = await this.projectService.getProjectDetail(userId, projectId);
            return res.status(200).json({ data: getProject })
            
        }catch(err){
            return res.status(500).json({ message: "getTodo 실패", error: err })
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