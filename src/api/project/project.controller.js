const ProjectService = require('./project.service');

class ProjectController {
    projectService = new ProjectService();

    getProject = async (req, res, next) =>{

    }


}

module.exports = ProjectController;