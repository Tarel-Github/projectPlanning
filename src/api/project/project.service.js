const ProjectRepository = require("./project.repository"); //리포지토리의 내용을 가져와야한다.

class ProjectService {
  projectRepository = new ProjectRepository();

  //특정 유저의 모든 프로젝트 가져오기
  getProjectAll = async (userId) => {
    const getProject = await this.projectRepository.getProjectAll(userId);
    return getProject;
  };

  //해당 프로젝트 자세히 보기
  getProjectDetail = async (userId, projectId) => {
    const getProject = await this.projectRepository.getProjectDetail(
      userId,
      projectId
    );
    return getProject;
  };

  //새로온 프로젝트 작성하기//완성
  postProject = async (userId, title) => {
    const postProject = await this.projectRepository.postProject(userId, title);
    return postProject;
  };

  //기존 프로젝트 수정하기
  putProject = async (userId, projectId, title) => {
    const infoProject = await this.projectRepository.infoProject(projectId);
    console.log(infoProject[0]);

    const author = infoProject[0].userId;
    if (userId !== author) {
      return;
    }

    const putProject = await this.projectRepository.putProject(
      userId,
      projectId,
      title
    );
    return putProject;
  };

  //기존 프로젝트 삭제하기//완성
  deleteProject = async (userId, projectId) => {
    const infoProject = await this.projectRepository.infoProject(projectId);
    const author = infoProject[0].userId;
    if (userId !== author) {
      return;
    }

    const deleteProject = await this.projectRepository.deleteProject(projectId);
    return deleteProject;
  };
}

module.exports = ProjectService;
