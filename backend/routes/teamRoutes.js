const express = require("express");
const router = express.Router();

const {
    getAllTeams, getTeamById, createTeam
} = require("../controllers/teamController");

router.get("/", getAllTeams);

router.post("/", createTeam);

router.get("/:id", getTeamById);

module.exports = router;