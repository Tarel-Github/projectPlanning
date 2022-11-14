//const { Users, Todo, Comments } = require('../db/models');          //모델 데이터를 가져와야함
const Project = require("../../db/schemas/todo")   


class TodoRepository {
    project = new Project()

    getProjectAll = async (userId) =>{
        const getData = await project.getProject(userId)
        return getData
    }

    getProjectDetail = async (userId, projectId) =>{
        const getData = await project.getProject(userId, projectId)
        return getData
    }

    //새로온 프로젝트 작성하기
    postProject = async (userId) =>{
        const postProject = await this.projectRepository.postProject(userId);
        return postProject;
    };

    //기존 프로젝트 수정하기
    putProject = async (userId) => {
        const putProject = await this.projectRepository.putProject(userId);
        return putProject;
    }

    //기존 프로젝트 삭제하기
    deleteProject = async (userId) => {
        const deleteProject = await this.projectRepository.deleteProject(userId);
        return deleteProject;
    }

}

module.exports = TodoRepository ;