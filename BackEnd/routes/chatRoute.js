const express = require("express");
const router = express.Router();
const chatController = require("../controllers/chatController")

router
    .route("/chat")
    .post(chatController.chatcontroller);

module.exports = router;