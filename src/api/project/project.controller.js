const ProjectService = require("./project.service");

class ProjectController {
  projectService = new ProjectService();

  //특정 유저의 모든 프로젝트 가져오기(/project/get)
  getProjectAll = async (req, res, next) => {
    try {
      //const {userId}= res.locals.user;
      const userId = 1;
      const getProject = await this.projectService.getProjectAll(userId);
      return res.status(200).json({ data: getProject });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "getProjectAll 실패", error: err });
    }
  };

  //해당 프로젝트 자세히 보기(/project/get/:projectId)
  getProjectDetail = async (req, res, next) => {
    try {
      //const {userId}= res.locals.user;
      const userId = 1;
      const { projectId } = req.params;

      const getProject = await this.projectService.getProjectDetail(
        userId,
        projectId
      );
      return res.status(200).json({ data: getProject });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "getProjectDetail 실패", error: err });
    }
  };

  //새로운 프로젝트 작성하기(/project/post)
  postProject = async (req, res, next) => {
    try {
      //const {userId}= res.locals.user;
      const userId = 1;
      const { title } = req.body;
      const postProject = await this.projectService.postProject(userId, title);
      return res.status(200).json({ data: postProject });
    } catch (err) {
      return res.status(500).json({ message: "postProject 실패", error: err });
    }
  };

  //기존 프로젝트 수정하기(/project/put)
  putProject = async (req, res, next) => {
    try {
      //const {userId}= res.locals.user;
      const userId = 1;
      const putProject = await this.projectService.putProject(
        userId,
        projectId
      );
    } catch (err) {
      return res.status(500).json({ message: "putProject 실패", error: err });
    }
  };

  //기존 프로젝트 삭제하기(/project/delete)
  deleteProject = async (req, res, next) => {
    try {
      //const {userId}= res.locals.user;
      const userId = 1;
      const projectId = req.params;
      const deleteProject = await this.projectService.deleteProject(projectId);
      return res
        .status(200)
        .json({ message: "삭제 성공", data: deleteProject });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "deleteProject 실패", error: err });
    }
  };
}

module.exports = ProjectController;
