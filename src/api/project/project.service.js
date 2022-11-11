const ProjectRepository = require("./project.repository");//리포지토리의 내용을 가져와야한다.

class ProjectService {
    projectRepository = new ProjectRepository();

}

module.exports = ProjectService;