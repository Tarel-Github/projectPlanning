const PlanService = require("./plan.service");

class PlanController {
  planService = new PlanService();

  //해당 프로젝트의 모든 플렌 가져오기
  getPlan = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      const { projectId } = req.params;
      const getPlan = await this.todoService.getPlan(projectId);
      return res.status(200).json({ message: "plan리스트", data: getPlan });
    } catch (err) {
      return res.status(500).json({ message: "getPlan실패", error: err });
    }
  };

  postPlan = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      const { projectId } = req.params;
      const postPlan = await this.todoService.getPlan(projectId);
      return res.status(200).json({ message: "plan리스트", data: postPlan });
    } catch (err) {
      return res.status(500).json({ message: "postPlan실패", error: err });
    }
  };

  putPlan = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      const { projectId } = req.params;
      const getPlan = await this.todoService.getPlan(projectId);
      return res.status(200).json({ message: "plan리스트", data: getPlan });
    } catch (err) {
      return res.status(500).json({ message: "putPlan실패", error: err });
    }
  };

  deletePlan = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      const { projectId } = req.params;
      const getPlan = await this.todoService.getPlan(projectId);
      return res.status(200).json({ message: "plan리스트", data: getPlan });
    } catch (err) {
      return res.status(500).json({ message: "deletePlan실패", error: err });
    }
  };
}

module.exports = PlanController;
