const express = require("express");
const router = express.Router();
const langflowCollection = require("../controllers/langflowController.js");

router
    .route("/langflow")
    .get((req, res) => { res.send("Welcome to Langflow setup of GenAi Hackathon")})
    .post(langflowCollection.langflow);

module.exports = router;