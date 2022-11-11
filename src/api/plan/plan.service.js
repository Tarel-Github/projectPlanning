const PlanRepository = require("./plan.repository");//리포지토리의 내용을 가져와야한다.

class PlanService {
    planRepository = new PlanRepository();

}

module.exports = PlanService;