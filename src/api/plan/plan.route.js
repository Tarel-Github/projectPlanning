const express = require("express");
const router = express.Router();

const PlanController = require("./plan.controller");
const planController = new PlanController();

const auth = require("../../middleware/authMiddleware");

//경로(/plan)
router.get("/plan/get/:projectId", auth, planController.getPlan);
router.post("/plan/post/:projectId", auth, planController.postPlan);
router.put("/plan/put/:planId", auth, planController.putPlan);
router.delete("/plan/delete/:planId", auth, planController.deletePlan);

module.exports = router;

//프로젝트의 하위 기능으로 글로써 작성한다.
//구현 기능: 글작성, 글수정, 글삭제
