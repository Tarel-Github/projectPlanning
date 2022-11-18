const express = require("express");
const router = express.Router();

const ProjectController = require("./project.controller");
const projectController = new ProjectController();

//경로(/project) 프로젝트는 아직 미완성
router.get("/get", projectController.getProjectAll);
router.get("/get/:projectId", projectController.getProjectDetail);
router.post("/post", projectController.postProject);
router.put("/put", projectController.putProject);
router.delete("/delete/:projectId", projectController.deleteProject);

module.exports = router;

//구현 기능: 프로젝트 생성, 프로젝트 열람, 프로젝트 편집, 프로젝트 삭제
