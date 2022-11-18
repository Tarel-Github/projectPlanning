const PlanRepository = require("./plan.repository"); //리포지토리의 내용을 가져와야한다.

class PlanService {
  planRepository = new PlanRepository();

  getPlan = async (projectId) => {
    const getPlan = await this.planRepository.getPlan(projectId);
    return getPlan;
  };

  postPlan = async (projectId, title, content) => {
    const postPlan = await this.planRepository.postPlan(
      projectId,
      title,
      content
    );
    return postPlan;
  };

  putPlan = async (planId, title, content) => {
    const putPlan = await this.planRepository.putPlan(planId, title, content);
    return putPlan;
  };

  deletePlan = async (planId) => {
    const deletePlan = await this.planRepository.deletePlan(planId);
    return deletePlan;
  };
}

module.exports = PlanService;
