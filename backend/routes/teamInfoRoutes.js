const express = require("express");

const router = express.Router();

const {
    getTeamInfo,
    upsertTeamInfo
} = require("../controllers/teamInfoController");

router.get("/:teamId", getTeamInfo);

router.put("/:teamId", upsertTeamInfo);

module.exports = router;