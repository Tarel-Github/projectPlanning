//const { Users, Plan, Comments } = require('../db/models');          //모델 데이터를 가져와야함
const Plan = require("../../db/schemas/plan");

class PlanRepository {
  getPlan = async (projectId) => {
    const getPlan = await Plan.find({ projectId: projectId });
    return getPlan;
  };

  postPlan = async (projectId, title, content) => {
    const date = new Date();
    let createdAt = date;
    let updatedAt = createdAt;
    let planId = date.valueOf();
    const postPlan = await Plan.create({
      planId,
      projectId,
      title,
      content,
      createdAt,
      updatedAt,
    });
    return postPlan;
  };

  putPlan = async (planId, title, content) => {
    const putPlan = await Plan.updateOne(
      { planId: planId },
      { $set: { title, content } }
    );
    return putPlan;
  };

  deletePlan = async (planId) => {
    const deletePlan = await Plan.remove({ planId: planId });
    return deletePlan;
  };
}

module.exports = PlanRepository;
