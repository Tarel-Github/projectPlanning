//const { Users, Todo, Comments } = require('../db/models');          //모델 데이터를 가져와야함
const Project = require("../../db/schemas/project")   

class ProjectRepository {
    project = new Project()

    //특정 유저의 모든 프로젝트 가져오기
    getProjectAll = async (userId) =>{
        const getData = await project.getProject(userId)
        return getData
    }

    //해당 프로젝트 자세히 보기
    getProjectDetail = async (userId, projectId) =>{
        const getData = await project.getProject(userId, projectId)
        return getData
    }


    ////////////////////////////////
    //새로온 프로젝트 작성하기
    postProject = async (userId, title) =>{
        let createdAt = date;
        let updatedAt = createdAt;
        const postProject = Project.create({userId, title, createdAt, updatedAt})
        //const postProject = await this.projectRepository.postProject(userId);
        return postProject;
    };
    ////////////////////////////////
    
    //기존 프로젝트 수정하기
    putProject = async (userId, projectId) => {
        const putProject = await this.projectRepository.putProject(userId);
        return putProject;
    }

    //기존 프로젝트 삭제하기
    deleteProject = async (userId, projectId) => {
        const deleteProject = await this.projectRepository.deleteProject(userId);
        return deleteProject;
    }

}

module.exports = ProjectRepository ;