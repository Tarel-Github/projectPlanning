const express = require('express');
const router = express.Router();

const PlanController = require('./plan.controller');
const planController = new PlanController;

router.get('/get', planController.getPlan());
router.post('/post', planController.postPlan());
router.put('/put', planController.putPlan());
router.delete('/delete', planController.deletePlan());


module.exports = router;


//프로젝트의 하위 기능으로 글로써 작성한다.
//구현 기능: 글작성, 글수정, 글삭제