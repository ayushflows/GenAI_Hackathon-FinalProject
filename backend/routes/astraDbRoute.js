const express = require("express");
const router = express.Router();
const astraDbCollection = require("../controllers/astraDbController.js");

router
    .route("/db")
    .get((req, res) => { res.send("Welcome to Astra Db setup of GenAi Hackathon") })
    .post(astraDbCollection.db);


module.exports = router;