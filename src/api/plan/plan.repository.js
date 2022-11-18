//const { Users, Plan, Comments } = require('../db/models');          //모델 데이터를 가져와야함
const Plan = require("../../db/schemas/plan");

class PlanRepository {
  getPlan = async (projectId) => {
    const getPlan = await Plan.find({ projectId: projectId });
    return getPlan;
  };

  postPlan = async (projectId, title, content) => {};
}

module.exports = PlanRepository;
