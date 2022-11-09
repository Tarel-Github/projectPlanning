const PlanService = require('./plan.service');

class PlanController {
    planService = new PlanService();

    getPlan = async (req, res, next) =>{

    }


}

module.exports = PlanController;