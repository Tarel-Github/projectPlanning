const express = require("express");
const router = express.Router();

const Tetris = require("./game.tetris");
const tetris = new Tetris();

const auth = require("../../middleware/authMiddleware");

router.get("/main/game/tetris", auth, tetris.tetris);

module.exports = router;
