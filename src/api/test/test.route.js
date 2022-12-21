const express = require("express");
const router = express.Router();

const TestController = require("./test.controller");
const testController = new TestController();

const auth = require("../../middleware/authMiddleware");

router.get("/test/get", auth, testController.getTest);

module.exports = router;
