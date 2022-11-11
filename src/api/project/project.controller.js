const ProjectService = require('./project.service');

class ProjectController {
    projectService = new ProjectService();

    getProject = async (req, res, next) =>{
        try{
            //const {userId}= res.locals.user;
            const userId = 1;
            const getProject = await this.projectService.getProject(userId);
            return res.status(200).json({ data: getProject })
        }catch(err){
            return res.status(500).json({ message: "getProject 실패", error: err })
        }
    }

    postProject = async (req, res, next) =>{
        try{
            //const {userId}= res.locals.user;
            const userId = 1;
            const postProject = await this.projectService.postProject(userId);
        }catch(err){
            return res.status(500).json({ message: "postProject 실패", error: err })
        }

    }

    putProject = async (req, res, next) =>{
        try{
            //const {userId}= res.locals.user;
        }catch(err){
            return res.status(500).json({ message: "putProject 실패", error: err })
        }

    }

    deleteProject = async (req, res, next) =>{

        try{
            //const {userId}= res.locals.user;
        }catch(err){
            return res.status(500).json({ message: "deleteProject 실패", error: err })
        }
    }


}

module.exports = ProjectController;