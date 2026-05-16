const express = require("express");
const router = express.Router();

const {
    getAllGames, getGameByID
} = require("../controllers/gameController");

router.get("/", getAllGames);

router.get("/:id", getGameByID);

module.exports = router;