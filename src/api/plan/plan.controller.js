const PlanService = require("./plan.service");

class PlanController {
  planService = new PlanService();

  //해당 프로젝트의 모든 플렌 가져오기
  getPlan = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      const { projectId } = req.params;
      const getPlan = await this.planService.getPlan(projectId);
      return res.status(200).json({ message: "plan리스트", data: getPlan });
    } catch (err) {
      return res.status(500).json({ message: "getPlan실패", error: err });
    }
  };

  //새로운 플랜 작성하기
  postPlan = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      const { projectId } = req.params;
      const { title, content } = req.body;

      const postPlan = await this.planService.postPlan(
        projectId,
        title,
        content
      );
      return res.status(200).json({ message: "plan리스트", data: postPlan });
    } catch (err) {
      return res.status(500).json({ message: "postPlan실패", error: err });
    }
  };

  //기존 플렌 수정하기
  putPlan = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      const { planId } = req.params;
      const { title, content } = req.body;

      const putPlan = await this.planService.putPlan(planId, title, content);

      if (putPlan.matchedCount === 0) {
        return res.status(400).json({ message: "대상없음", data: putPlan });
      }

      return res.status(200).json({ message: "plan리스트", data: putPlan });
    } catch (err) {
      return res.status(500).json({ message: "putPlan실패", error: err });
    }
  };

  //기존 플렌 제거하기
  deletePlan = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      const { planId } = req.params;

      const deletePlan = await this.planService.deletePlan(planId);

      if (deletePlan.deletedCount === 0) {
        return res.status(400).json({ message: "대상없음", data: deletePlan });
      }

      return res.status(200).json({ message: "플랜 삭제", data: deletePlan });
    } catch (err) {
      return res.status(500).json({ message: "deletePlan실패", error: err });
    }
  };
}

module.exports = PlanController;
