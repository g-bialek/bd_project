const express = require("express");
const router = express.Router();

const {
    getTable
} = require("../controllers/tableController");

router.get("/", getTable);

module.exports = router;