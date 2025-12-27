const express = require("express");
const { chatHandler } = require("../controllers/chat.controller");

const router = express.Router();

router.post("/", chatHandler);

module.exports = router;
