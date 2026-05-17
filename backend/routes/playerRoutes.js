const express = require("express");

const router = express.Router();

const {
    searchPlayer, getAllPlayers
} = require("../controllers/playerController");

router.get("/", getAllPlayers)
router.get("/search", searchPlayer);

module.exports = router;