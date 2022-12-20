const express = require("express");
const router = express.Router();

const TestController = require("./test.controller");
const testController = new TestController();

const auth = require("../../middleware/authMiddleware");

router.get("/test", auth, testController.get);

module.exports = router;
