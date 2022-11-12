//const { Users, Todo, Comments } = require('../db/models');          //모델 데이터를 가져와야함
const Project = require("../../db/schemas/project")   


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



}

module.exports = TodoRepository ;