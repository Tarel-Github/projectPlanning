const ProjectService = require('./project.service');

class ProjectController {
    projectService = new ProjectService();

    //특정 유저의 모든 프로젝트 가져오기
    getProjectAll = async (req, res, next) =>{
        try{
            //const {userId}= res.locals.user;
            const userId = 1;
            const getProject = await this.projectService.getProjectAll(userId);
            return res.status(200).json({ data: getProject })
        }catch(err){
            return res.status(500).json({ message: "getProjectAll 실패", error: err })
        }
    }

    //해당 프로젝트 자세히 보기
    getProjectDetail = async (req, res, next) =>{
        try{
            //const {userId}= res.locals.user;
            const userId = 1;
            const { projectId } = req.params;
            const getProject = await this.projectService.getProjectDetail(userId, projectId);
            return res.status(200).json({ data: getProject })
        }catch(err){
            return res.status(500).json({ message: "getProjectDetail 실패", error: err })
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