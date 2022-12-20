const express = require("express");
const router = express.Router();

const ProjectController = require("./project.controller");
const projectController = new ProjectController();

const auth = require("../../middleware/authMiddleware");

//경로(/project) 프로젝트는 아직 미완성
router.get("/project/get", auth, projectController.getProjectAll);
router.get("/project/get/:projectId", auth, projectController.getProjectDetail);
router.post("/project/post", auth, projectController.postProject);
router.put("/project/put/:projectId", auth, projectController.putProject);
router.delete(
  "/project/delete/:projectId",
  auth,
  projectController.deleteProject
);

module.exports = router;

//구현 기능: 프로젝트 생성, 프로젝트 열람, 프로젝트 편집, 프로젝트 삭제
