const express = require("express");
const router = express.Router();

const {
    getAllTeams, getTeamById
} = require("../controllers/teamController");

router.get("/", getAllTeams);

router.get("/:id", getTeamById);

module.exports = router;