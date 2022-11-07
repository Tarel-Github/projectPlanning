const express = require('express');
const router = express.Router();

const ProjectController = require('./post.controller');
const projectController = new ProjectController;

router.post('/', projectController.createProject);
router.get('/', projectController.getProject);
router.post('/', projectController.editProject);
router.delete('/', projectController.deleteProject);

module.exports = router;


//구현 기능: 프로젝트 생성, 프로젝트 열람, 프로젝트 편집, 프로젝트 삭제