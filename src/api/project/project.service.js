const ProjectRepository = require("./project.repository");//리포지토리의 내용을 가져와야한다.

class ProjectService {
    projectRepository = new ProjectRepository();

    getProjectAll = async (userId) =>{
        const getProject = await this.projectRepository.getProjectAll(userId)
        return getProject;
    }



    getProjectDetail = async (userId, projectId) =>{
        const getProject = await this.projectRepository.getProjectDetail(userId, projectId)
        return getProject;
    }

}

module.exports = ProjectService;